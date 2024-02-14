import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'
import User from "../models/user.model.js";
import Listing from "../models/listing.model.js";

export const test = (req, res) => {
    res.json({message : "user controller -- testt!!!"});
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
      return next(errorHandler(401, 'Yalnız kendi hesabınızı güncelleyebilirsiniz!'));
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
  
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };

  export const deleteUser =async(req, res, next) => {
    console.log(req.user)
    if(req.user.id !== req.params.id) {
        return next(errorHandler(401, "Yalnız kendi hesabını silebilirsin."))

      }
    try {
      await User.findByIdAndDelete(req.params.id);
      res.clearCookie('access_token')
      res.status(200).json('Kullanıcı silindi')
    } catch (error) {
      next(error)
    }
  }

  export const getUserListings = async (req, res, next) => {
    if (req.user.id === req.params.id) {
      try {
        const listings = await Listing.find({ userRef: req.params.id });
        res.status(200).json(listings);
      } catch (error) {
        next(error);
      }
    } else {
      return next(errorHandler(401, 'Yalnız kendi ilanlarını görebilirsin!'));
    }
  };
  
  export const getUser = async (req, res, next) => {
    try {
      
      const user = await User.findById(req.params.id);
    
      if (!user) return next(errorHandler(404, 'User not found!'));
    
      const { password: pass, ...rest } = user._doc;
    
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };