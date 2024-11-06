import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


type TPost = {
    title: string
    content: string
    published: boolean
}

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    const body = await readBody<TPost>(event)

    if(!id){
        throw createError({
            statusCode: 400,
            message: 'Invalid id'
        })
    }else {
        const post = await prisma.post.update({
            where: {
                id: Number(id),

            },
            data: {
                title: body.title,
                content: body.content,
                published: body.published
            }
        })
        return post
    }
})