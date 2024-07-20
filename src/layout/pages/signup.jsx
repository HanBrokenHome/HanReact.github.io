import React, { useState } from 'react';
import Button from '../../components/button';
import Input, { PasswordInput, Label, Radio } from '../../components/input';
import { Link } from 'react-router-dom';

function Signup() {
  const [setupRadio, setSetupRadio] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [InputPW, setInputPw] = useState('');

  const handleFormButton = (e) => {
    e.preventDefault();
    
      if(setupRadio === "" || email ==="" || InputPW === ""|| age){
        alert("Masukkan Form Input")
      }
      else{
        alert("Data Di Prosess")
      }
  };

  return (
    <div className='h-auto w-full bg-slate-200'>
    <form onSubmit={handleFormButton} className='w-2/4 flex flex-col m-auto'>
      <h1>SignUp</h1>
      <Label NamaLabel='Email' />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Label NamaLabel='New Password' />
      <div className='flex'>
        <PasswordInput value={InputPW} onChange={(e) => setInputPw(e.target.value)} />
      </div>
      <Label NamaLabel='Age' />
      <Input type='number' onChange={(e) => setAge(e.target.value)} value={age} />
      <Radio Value={setupRadio} Name='Gender' Gender='Male' onChange={(e) => setSetupRadio(e.target.value)} />
      <Radio Value={setupRadio} Name='Gender' Gender='Female' onChange={(e) => setSetupRadio(e.target.value)} />
      <Button Title='SignUp' onClick={handleFormButton} />
      <p className='text-sm'>
        Have an Account?<Link to="/login" className='text-sm font-bold font-OpenSans text-blue-500'>Sign In</Link>
      </p>
    </form>
    </div>
  );
}

export default Signup;
