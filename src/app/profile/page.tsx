'use client';

import { useAppSelector } from '../../../store';
import { UserType } from '../../../types/UserTypes';
import BackButton from '../components/BackButton';

export default function Page() {
  const user: UserType = useAppSelector((state) => state.auth.user);

  return (
    <main className="h-full w-full flex flex-col pt-5">
      <BackButton />
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
                prénom:{' '}
                <span data-test="firstname" className="text-base">
                  {user.firstname}
                </span>
              </p>
              <p className="text-lg">
                nom:{' '}
                <span data-test="lastname" className="text-base">
                  {user.lastname}
                </span>
              </p>
              <p className="text-lg">
                email:{' '}
                <span data-test="email" className="text-base">
                  {user.email}
                </span>
              </p>
            </>
          )}
        </div>
        B
      </div>
    </main>
  );
}
