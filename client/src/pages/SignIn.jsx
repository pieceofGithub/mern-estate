import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import { signInFailure,signInStart,signInSuccess } from '../redux/user/userSlice'


export default function SignIn() {

  const [formData, setFormData] = useState({})
  const {error, loading} = useSelector((state => state.user));
  const navigate = useNavigate();
  const dispacth = useDispatch();
  
  const handleChange = (e) =>{
    setFormData ({
      ...formData,
      [e.target.id] : e.target.value  
    })
  }

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ...
    
    try {
      dispacth(signInStart)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispacth(signInFailure(data.message));
        return;
      }

      dispacth(signInSuccess(data))
      navigate('/');
      console.log(data);
    } catch (error) {
     dispacth(signInFailure(error.message))
      console.error('API çağrısı sırasında bir hata oluştu:', error);
    }

    // ...

  };
  
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-center text-3xl font-semibold my-7'>Giriş Yap</h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4' >
        
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id="email" onChange={handleChange}/>
        <input type="password" placeholder='Şifre' className='border p-3 rounded-lg ' id="password" onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >{loading ? "Yükleniyor..." : "Giriş Yap"}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>{"Hesap oluştur =>"} </p>
        <Link to="/Kaydol">
          <span className='text-blue-700'>Kaydol</span>
        </Link>
      </div>
    </div>
  )
}
