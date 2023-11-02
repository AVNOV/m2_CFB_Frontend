'use client';

import Image from 'next/image';
import { useAppSelector } from '../../../store';
import arrow from '@/assets/icons/arrow.svg';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);

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
              <p className="text-lg">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-lg">{user.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
