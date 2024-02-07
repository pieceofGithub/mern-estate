import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())


const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex ve useFindAndModify seçenekleri kaldırıldı
  };
  
  // MongoDB bağlantı URL'sine ek seçenekleri ekleyin
  mongoose.connect(process.env.MONGO_DB_URI, connectionOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log("server running!!!éé");
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
  
  app.use('/api/user', userRouter)
  app.use('/api/auth',authRouter)
  
  
  app.use((err, req, res, next) => {
    
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error";

    return res.status(statusCode).json({
      success:"false",
      statusCode,
      errorMessage
    })
  })
