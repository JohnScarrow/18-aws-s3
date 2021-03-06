'use strict';

// random comment

const express = require('express');
const debug = require('debug')('userex:server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./route/auth-router.js');
const commentRouter = require('./route/comment-router.js');
const picRouter = require('./route/pic-router.js');
const errors = require('./lib/error-middleware.js');

dotenv.load();

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));

app.use(authRouter);
app.use(commentRouter);
app.use(picRouter);
app.use(errors);

app.listen(PORT, () => {
    debug(`currently listening on: ${PORT}`);
});