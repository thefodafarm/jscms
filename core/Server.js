import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import promisify from 'es6-promisify'
import cors from 'cors'
import low from 'lowdb'
import fileAsync from 'lowdb/lib/storages/file-async'


import { initDb } from './db/index.js'
import routes from './routes/index.js'

const app = express();

const db = low('./core/db/.index.json', { storage: fileAsync })

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

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res, next) => {
	res.locals.user = req.user || null
	next();
});

app.use((req, res, next) => {
	req.login = promisify(req.login, req);
	next();
});

app.use('/', routes);

app.set('port', process.env.PORT || 1337);

if(!db.has('pages').value()) {
	initDb(db);
}



const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});