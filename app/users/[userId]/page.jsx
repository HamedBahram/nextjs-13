import { getUserById } from '@/lib/prisma/users'
import User from './user'

const Page = async ({ params }) => {
  const { user } = await getUserById(params.userId)

  return <User user={user} />
}

export default Page
