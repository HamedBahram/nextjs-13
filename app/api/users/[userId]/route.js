import { getUserById } from '@/lib/prisma/users'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { userId } = params
    const { user, error } = await getUserById(userId)
    if (error) throw new Error(error)

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
