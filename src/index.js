import express from 'express';
import connect from './config/database.js';
import bodyParser from 'body-parser';

import apiRoutes from './router/index.js';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use('/api',apiRoutes);

app.listen(5000, async() => {
    console.log('Server Started :)');
    await connect();
})