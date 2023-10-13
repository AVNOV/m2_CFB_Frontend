'use client';
import Button from '../components/Button';
import Input from '../components/Input';
import { Controller, FieldValues, useForm } from 'react-hook-form';

export default function Page() {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

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
