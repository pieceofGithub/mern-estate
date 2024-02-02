import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function SignUp() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) =>{
    setFormData ({
      ...formData,
      [e.target.id] : e.target.value  
    })
  }

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // ...

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null); // Corrected this line, setting error to null
      navigate('/giris-yap');
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error); // Corrected this line, setting error to the error object
      console.error('API çağrısı sırasında bir hata oluştu:', error);
    }

    // ...

  };
  
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-center text-3xl font-semibold my-7'>Kaydol</h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4' >
        <input type="text" placeholder='Kullanıcı adı' className='border p-3 rounded-lg ' id="username" onChange={handleChange} />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg ' id="email" onChange={handleChange}/>
        <input type="password" placeholder='Şifre' className='border p-3 rounded-lg ' id="password" onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >{loading ? "Yükleniyor..." : "Kaydol"}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Hesabın var mı?</p>
        <Link to="/giris-yap">
          <span className='text-blue-700'>Giriş yap</span>
        </Link>
      </div>
    </div>
  )
}
