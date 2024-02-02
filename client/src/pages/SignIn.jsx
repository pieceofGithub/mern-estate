import React from 'react'

export default function SignIn() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-center text-3xl font-semibold my-7'>Giriş Yap</h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4' >
        
        <input required type="email" placeholder='Email' className='border p-3 rounded-lg ' id="email" onChange={handleChange}/>
        <input required type="password" placeholder='Şifre' className='border p-3 rounded-lg ' id="password" onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >{loading ? "Yükleniyor..." : "Giris Yap"}</button>
      </form>
      {/* <div className='flex gap-2 mt-5'>
        <p>Hesabın var mı?</p>
        <Link to="/giris-yap">
          <span className='text-blue-700'>Giriş yap</span>
        </Link>
      </div> */}
    </div>
  )
}
