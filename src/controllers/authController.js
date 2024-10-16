import { Router } from "express";
import authService from "../services/authService.js";
import validator from "validator";

const router = Router();

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res) => {
  const { email, password, rePassword} = req.body;

  /*if(!validator.isEmail(email)) {
    return res.status(400).end();
  };*/

  /*if(password !== rePassword) {
    return res.status(400).end();
  };*/

  try {
    await authService.register(email, password, rePassword);
  } catch (err) {
    console.log(err.message);
    return res.end();
  };
  
  const token = await authService.login(email, password);
  res.cookie('auth', token, {httpOnly: true});


  res.redirect('/');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
  } catch (err) {
    console.log(err.message);
    return res.render('auth/login', { errors: err });
  }
  res.cookie('auth', token, {httpOnly: true});
  res.redirect('/');
});

router.get('/logout', async (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

export default router;