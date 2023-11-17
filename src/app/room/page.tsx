'use client';
import { useEffect, useState } from 'react';

import BackButton from '../components/BackButton';
import PlayerCard from './PlayerCard';
import Input from '../components/Input';
import Button from '../components/Button';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import alien1 from '../../assets/images/aliens/alien1.json';
import alien2 from '../../assets/images/aliens/alien2.json';
import alien3 from '../../assets/images/aliens/alien3.json';
import alien4 from '../../assets/images/aliens/alien4.json';
import alien5 from '../../assets/images/aliens/alien5.json';
import alien6 from '../../assets/images/aliens/alien6.json';
import alien7 from '../../assets/images/aliens/alien7.json';
import ThemeDropdown from './ThemeDropdown';
import { useAppDispatch, useAppSelector } from 'store';
import { addGame, addUser } from 'api/query/room.query';
import { useRouter } from 'next/navigation';
import { RoomType } from 'types/RoomTypes';
import { update } from 'slices/auth.slice';
import { updateQuiz } from 'slices/quiz.slice';
import { getGame } from 'api/query/game.query';
import { GameType } from 'types/GameTypes';
import { UserType } from 'types/UserTypes';

export default function Page() {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm();
  const [theme, setTheme] = useState<number | null>(null);
  const [roomCode, setRoomCode] = useState<string>(user.room.code);
  const [avatarIds, setAvatarIds] = useState<Array<number>>([0, 1, 2, 3]);
  const [users, setUsers] = useState<UserType[]>([]);
  const avatars = [alien1, alien2, alien3, alien4, alien5, alien6, alien7];

  useEffect(() => {
    const newAvatarIds: Array<number> = [];
    while (newAvatarIds.length < 4) {
      const newId: number = Math.floor(Math.random() * 7);
      if (newAvatarIds.indexOf(newId) === -1) newAvatarIds.push(newId);
    }
    console.log(newAvatarIds);
    setAvatarIds(newAvatarIds);
  }, []);

  useEffect(() => {
    if (user.room.users) {
      setUsers(user.room.users);
    }
  }, [user]);

  const onSubmit = async (data: FieldValues) => {
    try {
      const room: RoomType = await addUser(data.roomCode);
      console.log(room);
      dispatch(update({ ...user, room: room }));
      setRoomCode(room.code);
    } catch (error) {
      console.error(error);
    }
  };

  const onThemeSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(+event.target.value);
  };

  const onGameBegin = async () => {
    try {
      const room: RoomType = await addGame(theme!);
      const game: GameType = await getGame(room.game.id.toString());
      dispatch(update({ ...user, room: { ...user.room, game: game } }));
      dispatch(updateQuiz(game.quiz));
      router.push(`/game?gameId=${game.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between py-10 h-full w-full">
      <div className="absolute left-0 top-2">
        <BackButton />
      </div>
      <h1 className="text-6xl mt-10">Salon de jeu</h1>
      <div className="flex w-full px-5">
        <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-5">
          <PlayerCard
            firstname={users[0]?.firstname}
            lastname={users[0]?.firstname}
            lottie={avatars[avatarIds[0]]}
          />
          <PlayerCard
            firstname={users[1]?.firstname}
            lastname={users[1]?.firstname}
            lottie={avatars[avatarIds[1]]}
          />
          <PlayerCard
            firstname={users[2]?.firstname}
            lastname={users[2]?.firstname}
            lottie={avatars[avatarIds[2]]}
          />
          <PlayerCard
            firstname={users[3]?.firstname}
            lastname={users[3]?.firstname}
            lottie={avatars[avatarIds[3]]}
          />
        </div>
        <div className="flex flex-col justify-between w-1/4 pl-10">
          <div>
            <p className="text-2xl">
              Code de votre partie : <br />
              <span className="text-orange-400">{roomCode}</span>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="mt-10 text-2xl">
                Rejoindre la partie d&apos;un ami
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Controller
                  name="roomCode"
                  control={control}
                  render={({ field }) => (
                    <Input type="text" label="code de la partie" {...field} />
                  )}
                />
                <Button type="submit">Valider</Button>
              </div>
            </form>

            <p className="text-xl mt-5">Choisie un theme:</p>
            <ThemeDropdown onChange={onThemeSelected} />
          </div>
          <Button onClick={onGameBegin} className="self-end">
            Commencer la partie
          </Button>
        </div>
      </div>
    </main>
  );
}
