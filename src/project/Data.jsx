import React, { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';

const Data = () => {
    const [Email, setEmail] = useState('');
    const [Text, setText] = useState('');
    const Handle = (e) =>{
      setEmail(e.target.value)
    }
    const MunculkanText = () =>{
      setText(Email);
    }
    
  return (
    <div>
      <Input value={Email} placeholder="Example@gmail.com" onChange={Handle}/>
      <Button Onclick={MunculkanText} Title="Login"/>
      <p>Sigma Kamu : {Text}</p>
    </div>
  )
}

export default Data;


