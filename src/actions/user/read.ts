'use server'

import { db } from '@/lib/db'

export async function getUser(wallet: string) {
    const user = await db.user.findUnique({
        where: { wallet },
        include: {
            skills: true,
            experiences: true,
            portfolio: true,
            pricing: true,
            reviews: true,
        }
    })

    return user
}

