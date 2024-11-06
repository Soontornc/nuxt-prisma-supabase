export default defineEventHandler((event) => {
    return {
        statusCode: 202,
        message: 'PUT request to /api/cart',
    }
})