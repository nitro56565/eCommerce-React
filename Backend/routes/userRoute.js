import express from 'express';
import {  login, register ,refreshTokenAPI ,verifyUser,getUser } from '../controller/userController.js';
import {createOrder, verifyPayment} from '../controller/paymentsController.js';
import { createOrderPaypal, captureOrder } from '../controller/paypalPaymentController.js';
import {order , getUserOrders} from '../controller/orderController.js';
import { authMiddleware } from "../middleware/authMiddleware.js";
import { fetchProducts } from '../controller/productController.js';


const route = express.Router();
route.post('/createOrder', createOrder);
route.post('/verifyPayment', verifyPayment);
route.post("/register", register);
route.post('/login', login);
route.post('/order',authMiddleware, order);
route.get('/getUserOrders',authMiddleware, getUserOrders);
route.post('/refreshToken', refreshTokenAPI);
route.get('/user', verifyUser, getUser);
route.post('/create-order',createOrderPaypal)
route.get('/capture-order/:paymentId', captureOrder);
route.get('/products',fetchProducts);

export default route;