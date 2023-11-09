'use client';
import React, { useContext } from 'react';
import { ToastContext } from '../layout';
import { useRouter } from 'next/navigation';

import { createUser } from '../../../api/query/user.query';
import { CreateUserType } from '../../../types/UserTypes';

import { Controller, FieldValues, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Input from '../components/Input';

import Link from 'next/link';
import BackButton from '../components/BackButton';

export default function Page() {
  const router = useRouter();
  const { handleSubmit, control } = useForm();
  const context = useContext(ToastContext);

  const onSubmit = async (data: FieldValues) => {
    try {
      await createUser(data as CreateUserType);
      context.toast.success('Votre compte a été créé avec succès');
      router.push('/login');
    } catch (error: any) {
      console.error(error);
      context.toast.error('Problème lors de la création de votre compte');
    }
  };

  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <div className="absolute left-0 top-2">
        <BackButton />
      </div>
      <h1 className="text-5xl mb-10">S&apos;enregistrer</h1>
      <form
        className="flex flex-col items-center space-y-4 w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => (
            <Input
              data-test="firstname"
              required
              label="Prénom"
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <Input
              data-test="lastname"
              required
              label="Nom"
              type="text"
              {...field}
            />
          )}
        />
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
        <Link href="/login" className="transition-transform active:scale-95">
          Vous avez déjà un compte ?{' '}
          <span className="underline">Cliquez ici</span>
        </Link>
        <Button>S&apos;enregistrer</Button>
      </form>
    </main>
  );
}
