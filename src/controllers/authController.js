import { Router } from "express";
import authService from "../services/authService.js";

const router = Router();

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res) => {
  const userData = req.body;
  await authService.register(userData.email, userData.password);
  res.redirect('/auth/login');
});

export default router;