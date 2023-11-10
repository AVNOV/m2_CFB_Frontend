import Lottie from 'lottie-react';
import Link from 'next/link';

type props = {
  lottie: any;
  title: string;
  href: string;
};

export default function ChoiceCard(props: props) {
  return (
    <li className="rounded-md bg-white bg-opacity-10 p-10 w-4/12 hover:scale-105 transition-all cursor-pointer duration-300 active:bg-opacity-20 active:scale-100">
      <Link className="flex flex-col items-center" href={props.href}>
        <Lottie animationData={props.lottie} loop={true} />
        <p className="text-3xl whitespace-nowrap">{props.title}</p>
      </Link>
    </li>
  );
}
