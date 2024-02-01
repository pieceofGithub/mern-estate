import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const app = express()


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
    
