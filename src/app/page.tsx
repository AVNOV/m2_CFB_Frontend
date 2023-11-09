'use client';
import { useAppDispatch, useAppSelector } from '../../store';
import { useRef } from 'react';
import { logout } from '../../slices/auth.slice';

import Image from 'next/image';
import Button from './components/Button';
import Lottie from 'lottie-react';

import rocket from '../assets/images/rocket.json';
import arrow from '@/assets/icons/arrow.svg';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { isLogged, user } = useAppSelector((store) => store.auth);
  const arrowRef = useRef<HTMLImageElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const onProfileClick = () => {
    if (arrowRef.current!.style.transform === 'rotate(180deg)') {
      arrowRef.current!.style.transform = 'rotate(0deg)';
      profileMenuRef.current!.style.opacity = '0';
    } else {
      arrowRef.current!.style.transform = 'rotate(180deg)';
      profileMenuRef.current!.style.opacity = '1';
    }
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <main className="relative h-full max-h-full overflow-hidden">
      <nav className="absolute right-5 top-3 z-20">
        {!isLogged ? (
          <a href="login" className="text-lg">
            Se connecter
          </a>
        ) : (
          <div className="relative">
            <div className="flex cursor-pointer" onClick={onProfileClick}>
              <span className="text-lg">{user.firstname}</span>
              <Image
                ref={arrowRef}
                className="w-4 object-contain ml-2 transition-transform"
                src={arrow}
                alt=""
              />
            </div>
            <div
              ref={profileMenuRef}
              className="absolute top-[150%] -left-20 opacity-0 transition-opacity"
            >
              <a
                className="flex bg-white rounded-t-md justify-center text-black py-2 hover:bg-slate-300 transition-colors"
                href="profile"
              >
                Profil
              </a>
              <div
                onClick={onLogout}
                className="flex bg-white rounded-b-md justify-center text-black whitespace-nowrap px-5 py-2 cursor-pointer hover:bg-slate-300 transition-colors"
              >
                Se deconnecter
              </div>
            </div>
          </div>
        )}
      </nav>
      <Lottie className="rocket" animationData={rocket} loop={true} />
      <div className="fade-in relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-8xl mb-20">Quizziky</h1>
        <Button
          onClick={() => {
            router.push('/theme-choice');
          }}
          className=" mb-4 text-xl"
        >
          Solo
        </Button>
        <Button className=" mb-4 text-xl">Multijoueur</Button>
        <Button className=" text-xl">Création de quizz</Button>
      </div>
    </main>
  );
}
