const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

/*const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});*/

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  //.get('/', (req, res) => res.render('pages/index'))

  //.get('/getRate', (req, res) => res.render('pages/result'))
  .get('/getRate', calculateRate)

  /*.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })*/
  //.get('/cool', (req, res) => res.send(cool()))
  //.get('/times', (req, res) => res.send(showTimes()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  function calculateRate(req, res) {
  	const weight = Number(req.query.weight)
  	const mail_rate = req.query.mail_rate

  	//console.log(weight)
  	//console.log(mail_rate)

  	var result = "0"
  	var mail_method = "Error"

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
	  		if (weight > 0 && weight <= 1) {
	  			result = "$ 3.66"
	  		}
	  		else if (weight > 1 && weight <= 2) {
	  			result = "$ 3.66"
	  		}
	  		else if (weight > 2 && weight <= 3) {
	  			result = "$ 3.66"
	  		}
	  		else if (weight > 3 && weight <= 4) {
	  			result = "$ 3.66"
	  		}
	  		else if (weight > 4 && weight <= 5) {
	  			result = "$ 4.39"
	  		}
	  		else if (weight > 5 && weight <= 6) {
	  			result = "$ 4.39"
	  		}
	  		else if (weight > 6 && weight <= 7) {
	  			result = "$ 4.39"
	  		}
	  		else if (weight > 7 && weight <= 8) {
	  			result = "$ 4.39"
	  		}
	  		else if (weight > 8 && weight <= 9) {
	  			result = "$ 5.19"
	  		}
	  		else if (weight > 9 && weight <= 10) {
	  			result = "$ 5.19"
	  		}
	  		else if (weight > 10 && weight <= 11) {
	  			result = "$ 5.19"
	  		}
	  		else if (weight > 11 && weight <= 12) {
	  			result = "$ 5.19"
	  		}
	  		else if (weight > 12 && weight <= 13) {
	  			result = "$ 5.71"
	  		}
	  		else {
	  			result = "not available (invalid weight)"
	  		}
	  		break;
  	}

  	const params = {weight: weight, mail_method: mail_method, result: result}

  	res.render('pages/result', params)
  }
  /*showTimes = () => {
    let result = ''
    const times = process.env.TIMES || 5
    for (i = 0; i < times; i++) {
      result += i + ' '
    }
    return result;
  }*/
