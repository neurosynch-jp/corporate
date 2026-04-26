'use client'

import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'
import {useState, useEffect} from 'react'
import Image from 'next/image'

type HeroProps = {
    headline1: string
    headline2: string
    sub: string
}

const slides = [
    {
        key: 'office' as const,
        industry: {ja: '士業・専門職', en: 'Professional Services'},
        pain: {
            ja: '書類作業に追われて、本来の仕事に集中できていますか？',
            en: 'Are you overwhelmed by paperwork?'
        },
        bg: 'from-[#0d1e35] to-[#102a45]',
        src: '/images/hero/pixta_116516966_L.jpg', // pixta_118019384_L.jpg, pixta_122358650_L.jpg
    },
    {
        key: 'care' as const,
        industry: {ja: '介護・医療', en: 'Healthcare & Nursing'},
        pain: {
            ja: '人手不足の中で、スタッフの負担は限界に近づいていませんか？',
            en: 'Is staff workload reaching its limit?'
        },
        bg: 'from-[#0d1e2e] to-[#0e2438]',
        src: '/images/hero/pixta_105426077_L.jpg', // pixta_83266689_L.jpg, pixta_117727393_L.jpg
    },
    {
        key: 'construction' as const,
        industry: {ja: '建設・製造業', en: 'Construction & Manufacturing'},
        pain: {
            ja: '現場と事務所の情報共有に、毎日時間をとられていませんか？',
            en: 'Losing hours to information gaps every day?'
        },
        bg: 'from-[#1a1208] to-[#221808]',
        src: '/images/hero/pixta_127341411_L.jpg', // pixta_127341411_L.jpg, pixta_30008756_L.jpg
    },
]

export default function Hero({headline1, headline2}: HeroProps) {
    const t = useTranslations('hero')
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

            {/* 背景写真（全スライド重ねてCSSで切り替え） */}
            {slides.map((s, i) => (
                <div
                    key={s.key}
                    className={`
            absolute inset-0
            transition-opacity duration-1000 ease-in-out
            ${i === current ? 'opacity-100' : 'opacity-0'}
          `}
                >
                    <Image
                        src={s.src}
                        alt={s.industry.ja}
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority={i === 0}
                    />
                </div>
            ))}

            {/* 暗いオーバーレイ（テキストを読みやすくする） */}
            <div className="absolute inset-0 bg-black/50"/>

            {/* 左下グラデーション（テキストエリアをより読みやすく） */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>

            {/* コンテンツ */}
            <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-20 md:pb-24">

                {/* 業種ラベル */}
                <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00c896] mb-4">
                    {slides[current].industry.ja}
                </p>

                {/* メインキャッチコピー */}
                <h1 className="font-outfit font-bold leading-tight tracking-tight text-white mb-4
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="block">{headline1}</span>
                    <span className="block">{headline2}</span>
                </h1>

                {/* サブテキスト */}
                <p className="text-sm md:text-base leading-loose text-white/75 font-light mb-8 max-w-lg">
                    {slides[current].pain.ja}
                </p>

                {/* CTAボタン */}
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                    <Link
                        href="/contact"
                        className="
              font-outfit text-sm font-semibold
              px-8 py-3 bg-[#00a87a] text-white rounded
              text-center
              transition-all hover:bg-[#007d5a] hover:-translate-y-px
            "
                    >
                        {t('cta_primary')}
                    </Link>
                    <Link
                        href="/services"
                        className="
              font-outfit text-sm font-medium
              px-8 py-3 rounded text-center
              border border-white/40 text-white/85
              transition-all hover:border-white hover:text-white
            "
                    >
                        {t('cta_secondary')}
                    </Link>
                </div>

                {/* スライドドット */}
                <div className="flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-[3px] rounded-sm transition-all duration-300 ${
                                i === current ? 'w-11 bg-[#00a87a]' : 'w-7 bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}