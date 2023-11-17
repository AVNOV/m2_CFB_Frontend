'use client';

import group from '../../assets/images/group.json';
import duel from '../../assets/images/duel.json';

import ChoiceCard from './ChoiceCard';
import BackButton from '../components/BackButton';
import { createRoom } from 'api/query/room.query';
import { useAppDispatch, useAppSelector } from 'store';
import { update } from 'slices/auth.slice';

export default function Page() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);
  const onRoomClick = async (): Promise<void> => {
    try {
      const room = await createRoom();
      dispatch(update({ ...user, room: room }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex justify-center items-center h-full w-full">
      <div className="absolute left-0 top-2">
        <BackButton />
      </div>
      <ul className="flex space-x-10 justify-center">
        <ChoiceCard
          onClick={onRoomClick}
          href="/room"
          lottie={group}
          title={'Joue entre amis'}
        />
        <ChoiceCard href="" lottie={duel} title={'Duel'} />
      </ul>
    </main>
  );
}
