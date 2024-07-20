import React, { useState } from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

function upshowpw() {
    const [showPw, setShowPw] = useState(false);
    const [Pw, setPw] = useState('');
    const HandleButton = () =>{
        if(Pw === ''){
          alert('Masukkan Form Pw')
        }
        else{
          alert(`Pw Berhasil di masukkan, pw anda adalah${Pw}`)
        }   
      };
      const HandlePw = () =>{
        setShowPw(!showPw);
      }
  return (
    <div>
      <input placeholder='Enter your password' type={showPw ? 'text' : 'password'} value={Pw} onChange={(e) =>setPw(e.target.value)}  name="password" />
    <button onClick={HandlePw}>{showPw ? <FaEyeSlash/> : <FaEye/>}</button>
    <button onClick={HandleButton}>Submit</button>
    </div>
  )
}

export default upshowpw
