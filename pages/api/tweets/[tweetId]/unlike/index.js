import { unLikeTweet } from '@/lib/prisma/tweets'

const handler = async (req, res) => {
  if (req.method === 'PATCH') {
    try {
      const { tweetId } = req.query

      const { tweet, error } = await unLikeTweet({ tweetId })
      if (error) throw new Error(error)

      return res.status(200).json({ tweet })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['PATCH'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
