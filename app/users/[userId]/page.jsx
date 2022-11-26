import { getUserById, getUsers } from '@/lib/prisma/users'
import User from './user'

export async function generateStaticParams() {
  const { users } = await getUsers()

  return users.map(user => ({
    userId: user.id
  }))
}

const Page = async ({ params }) => {
  const { user } = await getUserById(params.userId)

  return <User user={user} />
}

export default Page
