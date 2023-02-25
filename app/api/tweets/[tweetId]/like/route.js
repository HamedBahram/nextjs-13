import { likeTweet } from '@/lib/prisma/tweets'
import { NextResponse } from 'next/server'

export async function PATCH(request, { params }) {
  try {
    const { tweetId } = params
    const { tweet, error } = await likeTweet({ tweetId })
    if (error) throw new Error(error)

    return NextResponse.json({ tweet }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
