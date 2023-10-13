import React, { InputHTMLAttributes } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: string;
}

const InputText: React.FC<InputTextProps> = ({ inputType, ...rest }) => {
  return (
    <input
      type={inputType}
      className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-100 text-blue-800 placeholder-blue-400 border border-transparent"
      {...rest}
    />
  );
};

/* 
using <InputText
    inputType="email"
    placeholder="Entrer email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
*/

export default InputText;