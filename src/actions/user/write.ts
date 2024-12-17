'use server'

import { db } from '@/lib/db'
import { Prisma } from '@prisma/client'

export async function createUser(user: Prisma.UserCreateInput) {
    const newUser = await db.user.create({ data: user })
    return newUser
}