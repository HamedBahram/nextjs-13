import { getUsers } from '@/lib/prisma/users'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { users, error } = await getUsers()
    if (error) throw new Error(error)

    return NextResponse.json({ users }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
