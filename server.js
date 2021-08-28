const express = require('express');
const router = express.Router();
const path = require("path");
const dotenv = require('dotenv')
dotenv.config();
const bodyParser = require('body-parser');
const cors = require('cors');
//Express Connection
const app = express();
var HTTP_PORT = process.env.PORT || 5000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

