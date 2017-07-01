import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import promisify from 'es6-promisify'
import cors from 'cors'
import low from 'lowdb'
import fileAsync from 'lowdb/lib/storages/file-async'

import { initDb } from './db/index.js'
import routes from './routes/index.js'

const app = express();

const db = low('./core/db/index.json', { storage: fileAsync })

app.use(cors())

app.set('db', db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 1337);

if(!db.has('pages').value()) {
	initDb(db);
}



const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});