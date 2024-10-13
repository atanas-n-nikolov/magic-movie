import express from 'express';
import handlebars from 'express-handlebars';
import { Router } from 'express';

const app = express();
const router = Router();

app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(5000, () => console.log('Server is listening on port: http://localhost:5000 ...'));