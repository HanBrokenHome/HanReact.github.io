import React, { useState } from 'react';
import Button from './button';
import Inp, {Label}  from './input';

function formInput(props) {
    const [Password, setPassword] = useState('');

    const HandlePassword = (value) =>{
        setPassword(Password.value);
    }
  return (
    <div className='bg-white/50 shadow-lg w-[300px] h-[500px] rounded border justify-evenly m-auto my-16'>
        <h1 className='m-2 font-bold text-2xl'>Login Page Atomic Design</h1>
        <Label NamaLabel="Email"/>
        <Inp Place="Amboy@gmail.com"/>
      <Label NamaLabel="Password"/>
      <Inp Place="Jeemka wak" Type="password" Onchange={HandlePassword}/>
      <Button Title="Login"/>
      <p>Sigma:{Password}</p>
    </div>
  )
}

export default formInput
