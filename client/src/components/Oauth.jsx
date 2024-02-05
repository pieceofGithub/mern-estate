import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result)

      // Eğer bir API çağrısı yapmak istiyorsanız, API endpoint'inin doğru ayarlandığından emin olun.
      const res = await fetch('/api/auth/google', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }),
      });

      // Eğer bir API çağrısı yapacaksanız, response'u uygun bir şekilde işleyin.
      const data = await res.json();

      // signInWithPopup'tan gelen kullanıcı bilgileriyle signInSuccess action'ını dispatch edin.
      dispatch(signInSuccess(data));
      navigate('/')
      console.log(data);
    } catch (error) {
      console.log("Google hesabı ile giriş yapılamadı", error);
    }
  };

  return (
    <button
      type='button'
      onClick={handleGoogleClick}
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
    >
      Google ile bağlan
    </button>
  );
};

export default Oauth;
