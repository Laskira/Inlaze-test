import express, {Application} from 'express';
import morgan from  'morgan';
import path from 'path';
import cors from 'cors';
var bodyParser = require('body-parser');

const app: Application = express();

//Routes Importation
import Routes from '../src/routes/index'
import mongoose from 'mongoose';

//Settings
app.set('port', process.env.PORT || 4000) //server port

//Middlewares
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

//Routes
app.use('', Routes);


app.get('/', (req, res) => {
    return res.send(`The API is at http://localhost:${app.get('port')}`);
})

export default app;