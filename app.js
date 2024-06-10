const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sensorRoutes = require('./routes/sensor');

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 라우트 설정
app.use('/sensor-data', sensorRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
