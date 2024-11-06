export default defineEventHandler((event) => {
    setCookie(event, 'myCookie', 'myCookieValue', {
        // httpOnly: true,
        maxAge: 60 * 60 * 24,
        secure: process.env.NODE_ENV === 'production'
    })
    const cookies = parseCookies(event)
    // console.log(cookies)

    return {
        message: 'Cookies has been set',
        cookies
    }
})