import express from 'express';
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';
const morgan = require("morgan");
require("dotenv").config();
const url = require('url');

// db
mongoose.connect(process.env.DATABASE, {
  tls: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log("DB CONECTED"))
.catch((err) => console.log("DB CONNECTION ERR => ", err));

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
fs.readdirSync('./routes').map((r)=> 
    app.use('/api', require(`./routes/${r}`))
);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running ${port}`));
