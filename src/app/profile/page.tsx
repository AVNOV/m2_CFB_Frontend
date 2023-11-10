'use client';

import Image from 'next/image';
import { useAppSelector } from '../../../store';
import arrow from '@/assets/icons/arrow.svg';
import { useRouter } from 'next/navigation';
import { UserType } from '../../../types/UserTypes';

export default function Page() {
  const router = useRouter();
  const user: UserType = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-full w-full flex flex-col pt-5">
      <div className="flex cursor-pointer" onClick={() => router.push('/')}>
        <Image
          className="w-4 object-contain ml-2 rotate-90"
          src={arrow}
          alt=""
        />
      </div>
      <div className="flex flex-col my-auto justify-center items-center">
        <h1 className="text-5xl mb-10">Mes informations</h1>
        <div className="flex flex-col items-center space-y-4 w-1/3">
          {user.firstname === '' ? (
            <>
              <p>Chargement</p>
              <div className="dots-bars-4"></div>
            </>
          ) : (
            <>
              <p className="text-2xl">
                <span data-test="firstname" className="text-2xl">
                  {user.firstname}
                </span>
                <span data-test="lastname" className="text-2xl ml-2">
                  {user.lastname}
                </span>
              </p>
              <p className="text-2xl">
                <span data-test="email" className="text-2xl">
                  {user.email}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
