'use client';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import { ERRORS } from '@/app/lib/errors';
import { Blocks } from 'react-loader-spinner';

export default function SignInPage() {
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [errorValiadation, setErrorValiadation] = useState<string>('');

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        if (res && res?.ok) {
          setLoading(false);
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
    setLoading(false);
    setEmail((e.target as HTMLInputElement).value as string);
  };

  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorValiadation('');
    setLoading(false);
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
      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-semibold text-text-header"
      >
        Email
        <input
          type="email"
          className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          name="email"
          placeholder="Email"
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
        <input
          type="password"
          className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onChangeInputPassword(e)}
          required
        />
      </label>

      <div className="h-[40px]">
        {loading && !errorValiadation && (
          <div className="flex justify-center">
            <Blocks
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
              color="#6E6893"
            />
          </div>
        )}
        <span
          className="text-clr-overdue-status h-4"
          style={{ display: errorValiadation ? 'visible' : 'invisible' }}
        >
          {errorValiadation}
        </span>
      </div>

      <div className="flex w-full gap-3 justify-start">
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
