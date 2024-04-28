'use client';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import { ERRORS } from '@/app/lib/errors';
import { Blocks } from 'react-loader-spinner';
import { getUsersByEmail } from '@/app/lib/actions';
import Image from 'next/image';

export default function SignInPage() {
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorValiadation, setErrorValiadation] = useState<string>('');
  const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false);

  if (session.status === 'loading') {
    return (
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <Blocks />
      </div>
    );
  }

  const handleToggleShowPassword = () => {
    setToggleShowPassword((prev) => !prev);
  };

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await getUsersByEmail(email);

    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
      .then((res) => {
        if (user?.userStatus === 'Blocked') {
          setErrorValiadation(ERRORS.user_blocked);
          return;
        }
        if (res && res?.ok) {
          router.replace('/users-field');
        } else {
          setErrorValiadation(ERRORS.wrong_auth_data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorValiadation('');
    setEmail((e.target as HTMLInputElement).value as string);
  };

  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorValiadation('');
    setPassword((e.target as HTMLInputElement).value as string);
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col p-[30px] min-w-[350px] justify-between
        absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
          bg-bg-table-primary border-[1px] rounded-md
    shadow-xl gap-3"
    >
      <h2 className="text-text-header font-bold text-xl border-b-2 mb-4">
        Sign in
      </h2>
      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-semibold text-text-header"
      >
        Email
        <input
          type="email"
          className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          style={{
            outlineColor:
              errorValiadation === ERRORS.wrong_auth_data ? '#D30000' : '',
          }}
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => onChangeInputEmail(e)}
          required
        />
      </label>
      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-semibold text-text-header"
      >
        Password
        <div className="relative flex items-center justify-around">
          <input
            type={toggleShowPassword ? 'text' : 'password'}
            className="p-3 outline-none opacity-50 rounded-md bg-bg-color w-full"
            style={{
              outlineColor:
                errorValiadation === ERRORS.wrong_auth_data ? '#D30000' : '',
            }}
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => onChangeInputPassword(e)}
            required
          />
          <span
            className="absolute right-3 cursor-pointer"
            onClick={handleToggleShowPassword}
          >
            <Image
              src={toggleShowPassword ? '/assets/show.svg' : '/assets/hide.svg'}
              alt="toggle-password"
              width={20}
              height={20}
            />
          </span>
        </div>
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
          className="bg-bg-color text-bg-page font-bold p-2 rounded-md w-1/2  text-text-header"
        >
          Sign in
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
  );
}
