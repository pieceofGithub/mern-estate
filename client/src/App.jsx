import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/about';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter className='text-red-600'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/giris-yap" element={<SignIn/>} />
        <Route path="/kaydol" element={<SignUp/>} />
        <Route path="/hakkında" element={<About/>} />
        <Route path="/kullanıcı" element={<Profile/>} />
        

        
      </Routes>
      

    </BrowserRouter>
  )
}
