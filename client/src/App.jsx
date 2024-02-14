import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/about';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';


export default function App() {
  return (
    <BrowserRouter className='text-red-600'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/giris-yap" element={<SignIn/>} />
        <Route path="/kaydol" element={<SignUp/>} />
        <Route path="/hakkinda" element={<About/>} />
        <Route element = {<PrivateRoute/>}>
          <Route path="/kullanici" element={<Profile/>} />
          <Route path="/ilan-olustur" element={<CreateListing/>} />
        </Route>
        

        
      </Routes>
      

    </BrowserRouter>
  )
}
