import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const title = query.title as string
    const posts = await prisma.post.findMany({
        where: {
            title: {
                contains: title,
                mode: 'insensitive'
            }
        },
        select: {
            id: true,
            title: true,
            content: true,
            published: true
        },
        orderBy: {
            id: 'desc'
        },
        // where: {
        //     published: true
        // }
    })
    return posts
})