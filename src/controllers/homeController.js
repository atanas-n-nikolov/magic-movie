import { Router } from "express";

const router = Router();

const movies = []

router.get('/', (req, res) => {
  res.render('home', { movies });
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

export default router;