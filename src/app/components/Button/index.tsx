type props = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
};

export default function Button(props: props) {
  return (
    <div
      className={` px-2 py-1 w-fit rounded-md cursor-pointer transition-transform active:scale-95 ${
        props.disabled ? 'bg-gray-400' : 'bg-orange-400'
      } ${props.className}`}
    >
      <button
        disabled={props.disabled}
        type={props.type}
        onClick={props.disabled ? () => {} : props.onClick}
        className={` ${
          props.disabled ? 'bg-gray-500' : 'bg-orange-500'
        } px-5 py-1.5 rounded-md`}
      >
        {props.children}
      </button>
    </div>
  );
}
