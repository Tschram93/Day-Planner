const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app =  express();

app.use(express.json());
// use cors to prevent any cross-origin errors
app.use(cors());