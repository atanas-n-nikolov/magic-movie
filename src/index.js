import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';

const app = express();

app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(routes);

app.listen(5000, () => console.log('Server is listening on port: http://localhost:5000 ...'));