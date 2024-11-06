export default defineEventHandler((event) => {
    return {
        statusCode: 203,
        message: 'DELETE request to /api/cart',
    }
})