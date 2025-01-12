import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import UploadBillboard from './pages/UploadBillboard.jsx/UploadBillboard'
import UploadBanner from './pages/UploadBanner/UploadBanner'
import SuccessPage from './pages/SuccessPage/SuccessPage.'
import PreviewPage from './pages/PreviewPage.jsx/PreviewPage'
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
    <>
    <main className={`h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center`}>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/upload-billboard' element={<UploadBillboard/>} />
      <Route path='/upload-banner' element={<UploadBanner/>} />
      <Route path='/success' element={<SuccessPage/>} />
      <Route path='/preview' element={<PreviewPage/>} />
      <Route path="/signin" element={<LogIn />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </main>
    </>
  )
}

export default App