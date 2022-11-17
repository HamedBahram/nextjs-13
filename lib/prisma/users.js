import prisma from '.'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user })
    return { user: userFromDB }
  } catch (error) {
    return { error }
  }
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { tweets: true }
    })
    return { user }
  } catch (error) {
    return { error }
  }
}
