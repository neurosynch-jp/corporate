import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
})