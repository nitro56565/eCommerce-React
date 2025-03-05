import express from 'express';
import { dashboard, login, register } from '../controller/userController.js';
import {createOrder, verifyPayment} from '../controller/paymentsController.js';

const route = express.Router();
route.post('/createOrder', createOrder);
route.post('/verifyPayment', verifyPayment);
route.post("/register", register)
route.post('/login', login)
route.get('/dashboard', dashboard)

export default route;