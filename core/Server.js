import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import promisify from 'es6-promisify'
import cors from 'cors'
import morgan from 'morgan';


import { initDb } from './db/index.js'
import db from './db'
import routes from './routes/index.js'

const app = express();

app.use(cors())

app.set('db', db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(session({
	secret: 'whoisthebestever',
	key: 'abcd1234',
	resave: false,
	saveUninitialized: false
}));

app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use((req,res, next) => {
	res.locals.user = req.user || null
	next();
});

app.use((req, res, next) => {
	req.login = promisify(req.login, req);
	next();
});

app.use(function(err,req,res,next) {
	res.status(err.status || 500);
	res.json({message: 'Unknown', error: error});
});

app.use('/', routes);

app.set('port', process.env.PORT || 1337);

if(!db.has('pages').value()) {
	initDb(db);
}



const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});