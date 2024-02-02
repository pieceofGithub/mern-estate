import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10)
  
  // Mongoose modeli kullanıyorsanız, new User yerine new User({ ... }) şeklinde kullanmalısınız.
  const newUser = new User({ username, email, password:hashedPassword});

  // Kullanıcıyı kaydetmek için save fonksiyonunu kullanın.
  await newUser.save()
    .then(() => {
      res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi." });
    })
    .catch((error) => {
      console.error("Kullanıcı kaydı sırasında bir hata oluştu:", error);
      next(error);
    });
};
