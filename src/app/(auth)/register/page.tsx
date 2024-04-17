'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { registerUser } from '@/app/lib/actions';
import SuccessfulReg from '@/components/SuccessfulReg/SuccessfulReg';
import { Blocks } from 'react-loader-spinner';
import { ERRORS } from '@/app/lib/errors';

export default function RegisterPage() {
  const router = useRouter();
  const session = useSession();
  const [emailRegister, setEmailRegister] = useState<string>('');
  const [passwordRegister, setPasswordRegister] = useState<string>('');
  const [errorValiadation, setErrorValiadation] = useState<string>('');
  const [nameRegister, setNameRegister] = useState<string>('');
  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false);

  if (session.status === 'loading') {
    return (
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <Blocks />
      </div>
    );
  }

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
    name: string,
    email: string,
    password: string
  ) => {
    event.preventDefault();

    try {
      await registerUser(name, email, password);
      setRegistrationSuccess(true);
    } catch (error) {
      setErrorValiadation(ERRORS.user_exist);
    }
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorValiadation('');
    setEmailRegister(e.target.value as string);
  };

  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRegister(e.target.value as string);
  };

  const onChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameRegister(e.target.value as string);
  };

  return (
    <>
      {registrationSuccess ? (
        <SuccessfulReg />
      ) : (
        <form
          onSubmit={(e) =>
            onSubmitForm(e, nameRegister, emailRegister, passwordRegister)
          }
          className="flex flex-col p-[30px] min-w-[350px] justify-between absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  bg-bg-table-primary border-[1px] rounded-md
    shadow-xl gap-3"
        >
          <h2 className="text-text-header font-bold text-xl border-b-2 mb-4">
            Registration
          </h2>
          <label
            htmlFor="name"
            className="flex flex-col gap-2 text-sm font-semibold text-text-header"
          >
            User name
            <input
              type="text"
              className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
              name="name"
              placeholder="name"
              value={nameRegister}
              onChange={(e) => onChangeInputName(e)}
              required
            />
          </label>

          <label
            htmlFor="email"
            className="flex flex-col gap-2 text-sm font-semibold text-text-header"
          >
            Email
            <input
              type="email"
              className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
              style={{ outlineColor: errorValiadation ? '#D30000' : '' }}
              name="email"
              placeholder="email"
              value={emailRegister}
              onChange={(e) => onChangeInputEmail(e)}
              required
            />
          </label>

          <label
            htmlFor="password"
            className="flex flex-col gap-2 text-sm font-semibold text-text-header"
          >
            Password
            <input
              type="password"
              className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
              name="password"
              placeholder="password"
              value={passwordRegister}
              onChange={(e) => onChangeInputPassword(e)}
              required
            />
          </label>

          <span
            className="text-clr-overdue-status h-[10px]"
            style={{ display: errorValiadation ? 'visible' : 'invisible' }}
          >
            {errorValiadation}
          </span>

          <div className="flex w-full gap-3 justify-start mt-3">
            <button
              type="submit"
              className="bg-bg-color text-bg-page font-bold p-2 rounded-md w-1/2 text-text-header"
            >
              Register
            </button>
            <button
              type="button"
              className="bg-bg-color text-bg-page font-bold p-2 rounded-md  w-1/3  text-text-header opacity-50 hover:opacity-100"
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
}
