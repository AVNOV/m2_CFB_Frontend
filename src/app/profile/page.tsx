'use client';

import Image from 'next/image';
import { useAppSelector } from '../../../store';
import arrow from '@/assets/icons/arrow.svg';
import { UserType } from '../../../types/UserTypes';
import Link from 'next/link';

export default function Page() {
  const user: UserType = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-full w-full flex flex-col pt-5">
      <Link href="/" className="ml-2 w-4 transition-transform active:scale-95">
        <Image className="object-contain rotate-90" src={arrow} alt="" />
      </Link>
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
