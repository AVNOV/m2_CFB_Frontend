'use client';
import React, { useContext } from 'react';
import { login } from '../../../slices/auth.slice';
import Button from '../components/Button';
import Input from '../components/Input';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store';
import { useRouter } from 'next/navigation';
import { loginRequest } from '../../../api/query/user.query';
import { ToastContext } from '../layout';
import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const context = useContext(ToastContext);

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await loginRequest(data.email, data.password);
      dispatch(
        login({ user: response.user, access_token: response.access_token }),
      );
      context.toast.dismiss();
      router.push('/');
    } catch (error: any) {
      console.error(error);
      context.toast.error(error.response.data.message);
    }
  };
  const { handleSubmit, control } = useForm();

  return (
    <main className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="absolute left-0 top-2">
        <BackButton />
      </div>
      <h1 className="text-5xl mb-10">Se connecter</h1>
      <form
        className="flex flex-col items-center space-y-4 w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input required label="Email" type="email" {...field} />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input required label="Mot de passe" type="password" {...field} />
          )}
        />
        <Link href="/register" className="transition-transform active:scale-95">
          Vous n&apos;avez pas de compte ?{' '}
          <span className="underline">Cliquez ici</span>
        </Link>
        <Button data-test="submit">Se connecter</Button>
      </form>
    </main>
  );
}
