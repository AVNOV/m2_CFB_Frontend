'use client';

import group from '../../assets/images/group.json';
import duel from '../../assets/images/duel.json';

import ChoiceCard from './ChoiceCard';
import BackButton from '../components/BackButton';

export default function Page() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <div className="absolute left-0 top-2">
        <BackButton />
      </div>
      <ul className="flex space-x-10 justify-center">
        <ChoiceCard lottie={group} title={'Joue entre amis'} />
        <ChoiceCard lottie={duel} title={'Duel'} />
      </ul>
    </main>
  );
}
