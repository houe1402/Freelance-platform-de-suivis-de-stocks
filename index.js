const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('./config/db');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/stocks', stockRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
