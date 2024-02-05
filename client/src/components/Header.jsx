import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const {currentUser} = useSelector(state=> state.user)
    console.log(currentUser)
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
                        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap' >
                            <span className='text-slate-500'>Basak</span>
                            <span className='text-slate-700'>Emlak</span>
                        </h1>
                </Link>
                    
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input 
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                        type="text" 
                        placeholder='arama yap...' />
                    <FaSearch className='text-slate-600'></FaSearch>
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>Anasayfa</li>
                    </Link>
                    <Link to='/hakkında'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>Hakkında</li>
                    </Link>
                    <Link to='/kullanıcı'>
                        {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'></img>
                        ) : (<li className='sm:inline text-slate-700 hover:underline'>Giriş Yap</li>)}
                        
                    </Link>
                </ul>

            </div>
        </header>
    )
}
