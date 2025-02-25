import express from 'express';
import { dashboard, login, register } from '../controller/userController.js';


const route = express.Router();

route.post("/register", register)
route.post('/login', login)
route.get('/dashboard', dashboard)

export default route;