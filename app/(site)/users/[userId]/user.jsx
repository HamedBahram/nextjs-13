import Image from 'next/image'
import Tweet from './tweet'

const User = ({ user }) => {
  return (
    <section className='my-6 mx-8 flex gap-20'>
      <div>
        <div className='relative h-40 w-40 rounded-full'>
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name ?? 'profile image'}
              className='inline-block rounded-full'
              fill
            />
          ) : (
            <span className='inline-block h-40 w-40 overflow-hidden rounded-full bg-gray-100'>
              <svg
                className='h-full w-full text-gray-300'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </span>
          )}
        </div>
        <h1 className='text-xl font-bold'>{user?.name}</h1>
        <p className='text-sm text-stone-400'>{user?.email}</p>
      </div>
      <div className='grow'>
        <h2 className='text-2xl font-semibold tracking-tight text-stone-600'>
          Recent Tweets
        </h2>
        <ul>
          {user.tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default User
