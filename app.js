const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 3000;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let clients = [];

wss.on('connection', (ws) => {
    clients.push(ws);
    ws.on('close', () => {
    clients = clients.filter(client => client !== ws);
    });
});

app.post('/sensor-data', (req, res) => {
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
    lients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(sensorData));
    }
    });

    res.send('Data received');
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
