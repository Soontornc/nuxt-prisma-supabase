import { PrismaClient } from "@prisma/client"

type TUser = {
    name: string
    email: string
    posts: TPost[]
}

type TPost = {
    title: string
    content: string
    published: boolean
    author?: TUser
}

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody<TPost>(event)

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            published: body.published,
            author: {
                connectOrCreate: {
                    where: {
                        email: body.author!.email
                    },
                    create: {
                        name: body.author!.name,
                        email: body.author!.email

                    }
                }
            }
        }
    })
    return post
})