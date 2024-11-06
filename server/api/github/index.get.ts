export default defineEventHandler((event) => {
    const config = useRuntimeConfig(event)

    const data = {
        githubToken: config.githubToken,
        githubUsername: config.githubUsername,
        githubRepo: config.githubRepo
    }
    return data
})