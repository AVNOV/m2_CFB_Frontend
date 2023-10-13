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
      <h1 className="text-5xl mb-10">S&apos;enregistrer</h1>
      <form
        className="flex flex-col items-center space-y-4 w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => (
            <Input required label="Prénom" type="text" {...field} />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <Input required label="Nom" type="text" {...field} />
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
        <Button>S&apos;enregistrer</Button>
      </form>
    </div>
  );
}
