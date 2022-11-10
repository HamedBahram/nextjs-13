import { getUserById } from '@/lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { userId } = req.query
      const { user, error } = await getUserById(userId)
      if (error) throw new Error(error)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
