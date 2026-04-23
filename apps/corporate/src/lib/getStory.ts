import {getStoryblokApi} from "@/lib/storyblock";

export async function getStory(slug: string, locale: string) {
    const client = getStoryblokApi()

    const { data } = await client.get(`cdn/stories/${slug}`, {
        version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION as 'draft' | 'published',
        language: locale,
    })

    return data.story
}