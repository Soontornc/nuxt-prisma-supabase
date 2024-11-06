export default defineEventHandler((event) => {
    return {
        statusCode: 200,
        message: 'GET request to /api/cart',
    }
})