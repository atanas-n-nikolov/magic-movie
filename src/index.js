import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.send('<h1>Welcome my friend</h1>')
});

app.listen(5000, () => console.log('Server is listening on port: http://localhost:5000 ...'));