import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config.js';

import connectDB from './configs/db.js';
import connectCloudinary from './configs/cloudinary.js';

// Routers
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';

import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.PORT || 4000;

// 🔗 Connect to MongoDB & Cloudinary
await connectDB();
await connectCloudinary();

// ✅ Setup CORS (allow frontend + backend domains)
const allowedOrigins = [
  'http://localhost:5174',
  'https://swaad-store-hggu.vercel.app',
  'https://swaad-store.vercel.app'
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// 🧾 Stripe webhook (must come before express.json)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Default route
app.get('/', (req, res) => res.send('SwaadStore API is Working 🚀'));

// ✅ API Routes
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);

// ✅ Error fallback
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

// Start server
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
