import { forwardRef } from 'react';

type props = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  onChange: (value: string) => void;
  value: string;
  defaultValue?: string;
  disabled?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Input = forwardRef((props: props, ref) => {
  return (
    <div className="w-full">
      <input
        className="border-2 focus:outline-orange-400 border-grey rounded-lg w-full py-2 px-3 leading-tight border-solid bg-white text-black"
        required={props.required}
        id={props.name}
        type={props.type}
        placeholder={props.label.toLocaleLowerCase()}
        value={props.value ? props.value : ''}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
