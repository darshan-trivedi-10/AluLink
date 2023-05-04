import express from 'express';
import connect from './config/database.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(5000, async() => {
    console.log('Server Started :)');
    await connect();
})