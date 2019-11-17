const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('pages/index'))

  .get('/getRate', calculateRate)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function calculateRate(req, res) {
  	const weight = Number(req.query.weight)
  	const mail_rate = req.query.mail_rate
  	const zone = Number(req.query.zone)

  	var result = ""
  	var mail_method = "Error"
  	var zone_number = ""

  	switch (mail_rate) {
  		case "stamped":
	  		mail_method = "Letters (Stamped)"
	  		if (weight > 0 && weight <= 1) {
	  			result = "$ 0.55"
	  		}
	  		else if (weight > 1 && weight <= 2) {
	  			result = "$ 0.70"
	  		}
	  		else if (weight > 2 && weight <= 3) {
	  			result = "$ 0.85"
	  		}
	  		else if (weight > 3 && weight <= 3.5) {
	  			result = "$ 1.00"
	  		}
	  		else {
	  			result = "not available (invalid weight)"
	  		}
	  		break;

	  	case "metered":
	  		mail_method = "Letters (Metered)"
	  		if (weight > 0 && weight <= 1) {
	  			result = "$ 0.50"
	  		}
	  		else if (weight > 1 && weight <= 2) {
	  			result = "$ 0.65"
	  		}
	  		else if (weight > 2 && weight <= 3) {
	  			result = "$ 0.80"
	  		}
	  		else if (weight > 3 && weight <= 3.5) {
	  			result = "$ 0.95"
	  		}
	  		else {
	  			result = "not available (invalid weight)"
	  		}
	  		break;
	
	  	case "flats":
	  		mail_method = "Large Envelopes (Flats)"
	  		if (weight > 0 && weight <= 1) {
	  			result = "$ 1.00"
	  		}
	  		else if (weight > 1 && weight <= 2) {
	  			result = "$ 1.15"
	  		}
	  		else if (weight > 2 && weight <= 3) {
	  			result = "$ 1.30"
	  		}
	  		else if (weight > 3 && weight <= 4) {
	  			result = "$ 1.45"
	  		}
	  		else if (weight > 4 && weight <= 5) {
	  			result = "$ 1.60"
	  		}
	  		else if (weight > 5 && weight <= 6) {
	  			result = "$ 1.75"
	  		}
	  		else if (weight > 6 && weight <= 7) {
	  			result = "$ 1.90"
	  		}
	  		else if (weight > 7 && weight <= 8) {
	  			result = "$ 2.05"
	  		}
	  		else if (weight > 8 && weight <= 9) {
	  			result = "$ 2.20"
	  		}
	  		else if (weight > 9 && weight <= 10) {
	  			result = "$ 2.35"
	  		}
	  		else if (weight > 10 && weight <= 11) {
	  			result = "$ 2.50"
	  		}
	  		else if (weight > 11 && weight <= 12) {
	  			result = "$ 2.65"
	  		}
	  		else if (weight > 12 && weight <= 13) {
	  			result = "$ 2.80"
	  		}
	  		else {
	  			result = "not available (invalid weight)"
	  		}
	  		break;

	  	case "package":
	  		mail_method = "First-Class Package Service—Retail"
	  		switch (zone) {
	  			case 1:
	  				zone_number = "to zone 1"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.66"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.39"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.19"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 5.71"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 2:
			  		zone_number = "to zone 2"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.66"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.39"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.19"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 5.71"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 3:
			  		zone_number = "to zone 3"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.70"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.44"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.24"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 5.78"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 4:
			  		zone_number = "to zone 4"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.74"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.49"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.30"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 5.85"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 5:
			  		zone_number = "to zone 5"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.78"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.53"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.35"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 5.93"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 6:
			  		zone_number = "to zone 6"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.82"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.57"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.40"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 5.99"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 7:
			  		zone_number = "to zone 7"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 3.94"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.69"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.53"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 6.13"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 8:
			  		zone_number = "to zone 8"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 4.06"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.81"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.66"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 6.27"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
			  	case 9:
			  		zone_number = "to zone 9"
		  			if (weight > 0 && weight <= 4) {
		  			result = "$ 4.06"
			  		}
			  		else if (weight > 4 && weight <= 8) {
			  			result = "$ 4.81"
			  		}
			  		else if (weight > 8 && weight <= 12) {
			  			result = "$ 5.66"
			  		}
			  		else if (weight > 12 && weight <= 13) {
			  			result = "$ 6.27"
			  		}
			  		else {
			  			result = "not available (invalid weight)"
			  		}
			  		break;
	  		}
	  		break;
  	}

  	const params = {weight: weight, mail_method: mail_method, zone_number: zone_number, result: result}

  	res.render('pages/result', params)
  }
