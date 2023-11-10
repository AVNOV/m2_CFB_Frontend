import Lottie from 'lottie-react';

type props = {
  lottie?: any;
  firstname?: string;
  lastname?: string;
};

export default function PlayerCard(props: props) {
  return (
    <li className="flex flex-col items-center justify-center rounded-md bg-blue-400 bg-opacity-30 p-10">
      {props.firstname ? (
        <>
          <Lottie className="w-4/12" animationData={props.lottie} loop={true} />
          <p className="text-3xl whitespace-nowrap">
            {props.firstname} {props.lastname}
          </p>{' '}
        </>
      ) : (
        <p className="text-9xl">?</p>
      )}
    </li>
  );
}
