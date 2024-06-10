const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { temperature, humidity, co2, ir1, ir2, ir3, ir4 } = req.body;

    console.log(`Temperature: ${temperature}`);
    console.log(`Humidity: ${humidity}`);
    console.log(`CO2: ${co2}`);
    console.log(`IR Sensor 1: ${ir1}`);
    console.log(`IR Sensor 2: ${ir2}`);
    console.log(`IR Sensor 3: ${ir3}`);
    console.log(`IR Sensor 4: ${ir4}`);

  // 데이터를 데이터베이스에 저장하거나 다른 처리를 여기에 추가

    res.send('Data received');
});

module.exports = router;
