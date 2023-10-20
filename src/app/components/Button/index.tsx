type props = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  className?: string;
};

export default function Button(props: props) {
  return (
    <div
      className={`bg-orange-400 px-2 py-1 w-fit rounded-md cursor-pointer ${props.className}`}
    >
      <button
        type={props.type}
        onClick={props.onClick}
        className=" bg-orange-500 px-5 py-1.5 rounded-md"
      >
        {props.children}
      </button>
    </div>
  );
}
