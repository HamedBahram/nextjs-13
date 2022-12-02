import { getUsers } from '@/lib/prisma/users'
import Users from './users'

const UsersLayout = async ({ children }) => {
  const { users } = await getUsers()

  return (
    <section className='flex'>
      <aside className='w-1/4'>
        <Users users={users} />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default UsersLayout
