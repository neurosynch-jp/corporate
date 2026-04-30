import {getStory} from '@/lib/getStory'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import CtaSection from '@/components/sections/CtaSection'
import {getTranslations} from 'next-intl/server'

type HomeContent = {
    hero_headline1: string
    hero_headline2: string
    hero_sub: string
    mission_headline: string
    mission_body: string
    vision_headline: string
    vision_body: string
    representative_message: string
}

export default async function HomePage({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    const story = await getStory('home', locale)
    const content = story?.content as HomeContent | null

    if (!content) {
        return <main><p>コンテンツが取得できませんでした</p></main>
    }

    return (
        <>
            <Hero
                headline1={content.hero_headline1}
                headline2={content.hero_headline2}
                sub={content.hero_sub}
            />
            <Stats/>
            <Problem/>
            <Solution/>
            <CtaSection/>
        </>
    )
}

export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    const t = await getTranslations('hero')

    return {
        title: locale === 'ja'
            ? 'Neurosynch | AIエージェント導入支援'
            : 'Neurosynch | AI Agent Deployment Support',
        description: locale === 'ja'
            ? '名古屋を拠点に、中小企業へのAIエージェント導入を支援します。先行導入価格30万円から。'
            : 'Nagoya-based AI agent deployment support for SMEs. Early adoption from ¥300,000.',
        openGraph: {
            title: locale === 'ja' ? '先端テクノロジーを、中小企業へ。' : 'Bringing Advanced Technology to SMEs.',
            description: locale === 'ja'
                ? 'Neurosynchは、AIエージェントの導入から運用定着まで責任を持って伴走します。'
                : 'Neurosynch accompanies you from AI agent deployment through to full operational adoption.',
            url: `https://neurosynch.co.jp/${locale}`,
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Neurosynch',
                }
            ]
        }
    }
}