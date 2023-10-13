'use client';
import { useState } from 'react';
import { login } from '../../../slices/auth.slice';
import Button from '../components/Button';
import Input from '../components/Input';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store';
import { useRouter } from 'next/router';
import { loginRequest } from '../../../api/query/user.query';

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await loginRequest(data.email, data.password);
      dispatch(
        login({ user: response.user, access_token: response.access_token }),
      );
      setError('');
      router.push('/');
    } catch (error: any) {
      console.error(error);
      setError('Erreur, vérifiez votre email et/ou votre mot de passe.');
    }
  };
  const { handleSubmit, control } = useForm();

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
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
        <Button>Se connecter</Button>
      </form>
    </div>
  );
}
