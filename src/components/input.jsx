import React, { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'

function Input(props) {
  const {type, name, Id, placeholder, onChange, value} = props;
  return (
    <div>
      <input type={type} name={name} id={Id} value={value} onChange={onChange} placeholder={placeholder} className='focus:outline-blue-500 border rounded  w-[70%] mx-auto p-2 min-h-0 text-sm'/>
    </div>
  );
}

export const Label = (props) =>{
    const {htmlFor, NamaLabel} = props;
    return(
        <label htmlFor={htmlFor} className='font-semibold font-lemonmilk  text-left'>{NamaLabel}</label>
    )
}
export const Radio = (props) =>{
  const {ValueRadio, Gender, Name, Onchange, Cek} = props;
  return(
    <div>
      <label>
      <input type="radio" name={Name} checked={Cek} onChange={Onchange} value={ValueRadio}/>{Gender}
      </label>
    </div>
  )
}

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { value, onChange } = props;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}  // Ini adalah value yang dikontrol
        onChange={onChange}
        className="focus:outline-blue-500 bg-white border rounded w-[70%] mx-auto p-2 min-h-0 text-sm"
      />
      <button type="button" onClick={toggleShowPassword} className="px-2">
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default Input;