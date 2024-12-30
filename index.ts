import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/mongoDB';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
    connectDB();
})
