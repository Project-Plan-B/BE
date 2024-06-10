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

  const sensorData = {
    temperature,
    humidity,
    co2,
    ir1,
    ir2,
    ir3,
    ir4
  };

  // 모든 연결된 클라이언트에게 데이터 전송
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(sensorData));
    }
  });

  res.send('Data received');
});

module.exports = router;
