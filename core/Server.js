import express from 'express'
import routes from './routes/index.js'

const app = express();

// app.use('/', routes);

app.set('port', process.env.PORT || 1337);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});