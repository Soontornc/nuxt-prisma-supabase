export default defineEventHandler((event) => {
    return {
        statusCode: 201,
        message: 'POST request to /api/cart',
    }
})