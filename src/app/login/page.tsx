'use client'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginValidationSchema = zod.object({
  email: zod.string().email('This is not a valid email.'),
  password: zod.string().min(6, { message: 'This field has to be filled.' }),
})

type ValidationFormData = zod.infer<typeof loginValidationSchema>

export default function Login() {
  const validationLoginForm = useForm<ValidationFormData>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, reset, formState } = validationLoginForm

  function handleSubmitForm() {
    reset()
  }

  console.log(formState.errors)

  return (
    <div className="px-12 py-14">
      <div>
        <p className="text-5xl">LOGO</p>
        <h1 className="mt-20 text-[41px] font-bold w-[554px] text-pretty">
          Welcome back! Please Sign in to continue.
        </h1>
        <p className="mt-7  text-base font-bold text-[#7A7A7A] w-[585px] text-pretty">
          By signing up, you will gain access to exclusive content, special
          offers, and be the first to hear about exciting news and updates.
        </p>

        <FormProvider {...validationLoginForm}>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col w-[624px] mt-7"
          >
            <label htmlFor="email" className="flex flex-col gap-3">
              <span>E-Mail</span>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="h-11 rounded-md bg-[#ECECEC] text-[#818181] pl-3"
              />
            </label>

            <label htmlFor="password" className="flex flex-col  gap-3 mt-7">
              <span>Password</span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="h-11 rounded-md bg-[#ECECEC] text-[#818181] pl-3"
              />
            </label>

            <a href="#" className="text-[#7A7A7A] text-sm font-bold mt-2 mb-4">
              Forgot password?
            </a>

            <label htmlFor="terms">
              <input type="checkbox" id="terms" />
              <span className="pl-2">
                By signing up you have agreed to our{' '}
                <a href="#" className="text-blue-500">
                  Terms
                </a>{' '}
                &{' '}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="rounded-md h-12 mt-12 text-white bg-black text-[18px] font-bold"
            >
              Sign in
            </button>
          </form>
        </FormProvider>
        <p className="mt-11 text-[#7A7A7A] font-bold">
          Don't have an account?{' '}
          <a href="#" className="text-black">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
