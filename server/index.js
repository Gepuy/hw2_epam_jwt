/* eslint-disable indent */
/* eslint-disable linebreak-style */
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 8080;
const db = process.env.DB_URL;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(db);
        app.listen(PORT, () => {
            console.log(`Server has been run on ${PORT} port`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
