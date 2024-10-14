import { Router } from "express";
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import castCotroller from './controllers/castController.js';

const router = Router();

router.use(homeController);
router.use('/movies', movieController);
router.use('/casts', castCotroller);
router.all('*', (req, res) => {
  res.render('404');
});

export default router;