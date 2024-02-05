import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector( (state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7 '>Kullanıcı</h1>
      <form className="flex flex-col gap-4">
        <img className="rounded-lg object-cover h-24 w-24 cursor-pointer self-center mt-2 " src={currentUser.avatar} alt="kullanıcı" />
        <input type="text" className="rounded-lg border p-3" placeholder="Kullanıcı ismi" id="username"/>
        <input type="email" className="rounded-lg border p-3" placeholder="email" id="email"/>
        <input type="password" className="rounded-lg border p-3" placeholder="şifre" id="password"/>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 ">Güncelle</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Hesabı sil</span>
        <span className="text-red-700 cursor-pointer">Hesaptan çıkış yap</span>
      </div>
    </div>
  )
}
