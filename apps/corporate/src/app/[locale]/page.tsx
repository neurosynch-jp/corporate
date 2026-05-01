import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Target from '@/components/sections/Target'
import Solution from '@/components/sections/Solution'
import Founder from '@/components/sections/Founder'
import {getTranslations} from 'next-intl/server'

export default async function HomePage({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const t = await getTranslations('hero')

    return (
        <>
            <Hero
                eyebrow={t('eyebrow')}
                headline1={t('headline1')}
                headline2={t('headline2')}
                scrollLabel={t('scroll')}
            />
            <Problem/>
            <Target/>
            <Solution/>
            <Founder/>
        </>
    )
}

export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params

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
