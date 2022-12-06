import Button from 'app/components/ui/button'
import TextField from 'app/components/form/TextField'
import GoogleLoginButton from 'app/components/auth/GoogleSignInButton'

const SignInPage = () => {
  return (
    <>
      <form>
        <div className='space-y-2'>
          <TextField
            id='email'
            name='email'
            type='email'
            label='Sign in with your email'
            placeholder='hello@me.com'
            autoComplete='email'
            required
          />
        </div>
        <Button
          type='submit'
          variant='outline'
          color='gray'
          className='mt-3 w-full'
        >
          Continue with email
        </Button>
      </form>
      <div className='mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <GoogleLoginButton />
    </>
  )
}

export default SignInPage
