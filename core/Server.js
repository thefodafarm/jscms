import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'

import routes from './routes/index.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 1337);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
