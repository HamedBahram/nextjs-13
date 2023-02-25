import { getUserById, getUsers } from '@/lib/prisma/users'
import User from './user'

// export async function generateStaticParams() {
//   const { users } = await getUsers()

//   return users.map(user => ({
//     userId: user.id
//   }))
// }

async function getUser(userId) {
  const { user } = await getUserById(userId)
  if (!user) {
    throw new Error('Failed to fetch data')
  }

  return user
}

export async function generateMetadata({ params, searchParams }) {
  const user = await getUser(params.userId)
  return { title: user.name }
}

const Page = async ({ params }) => {
  const user = await getUser(params.userId)

  return <User user={user} />
}

export default Page
