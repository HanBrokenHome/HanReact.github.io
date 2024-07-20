import React, { useState } from 'react'
import Input,{Label, PasswordInput}from '../../components/input'
import Button from '../../components/button'
import { Link } from 'react-router-dom';


function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
 const HandleButton = (e) =>{
  const history = 
    e.preventDefault();
    if(Email ==="" || Password === ""){
        alert("Masukkan Form")
    }
    else{
        alert("Data DI Proses")
    }
  };

  return (
    <div className='h-auto w-full bg-slate-200'>
    <div className='rounded w-[50%]  flex flex-col justify-center m-auto min-h-screen'>
        <form action="#" className='flex flex-col'>
      <h1 className='text-2xl font-bold font-sans text-blue-500'>Login Page</h1>
      <p className='text-sm text-blue-500'>Selamat Datang Di Halaman Login</p>
      <Label NamaLabel="Email: " htmlFor="email"/>
      <Input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Example@gmail.com"/>
      <Label NamaLabel="Password" htmlFor="password"/>
      <PasswordInput type="password" value={Password} onChange={(e) => setPassword(e.target.value)} name="password"/>
      <a href="#" className='text-blue-500 underline text-sm'>Lupa Password</a>
      <Button Title="Login" Onclick={HandleButton}/>
      <p className='text-slate-500 text-sm'>Don`t Have Account? 
        <Link to="/signup" className='text-blue-500 font-bold font-OpenSans text-sm'>Sign Up</Link>
      </p>
        </form>
      
    </div>
    </div>
  )
}

export default Login
