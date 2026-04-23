'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { useState, useEffect } from 'react'

type HeroProps = {
    headline1: string
    headline2: string
    sub: string
}

const slides = [
    {
        key: 'office' as const,
        industry: { ja: '士業・専門職', en: 'Professional Services' },
        pain: {
            ja: '書類作業に追われて、本来の仕事に集中できていますか？',
            en: 'Are you overwhelmed by paperwork?'
        },
        bg: 'from-[#0d1e35] to-[#102a45]',
    },
    {
        key: 'care' as const,
        industry: { ja: '介護・医療', en: 'Healthcare & Nursing' },
        pain: {
            ja: '人手不足の中で、スタッフの負担は限界に近づいていませんか？',
            en: 'Is staff workload reaching its limit?'
        },
        bg: 'from-[#0d1e2e] to-[#0e2438]',
    },
    {
        key: 'construction' as const,
        industry: { ja: '建設・製造業', en: 'Construction & Manufacturing' },
        pain: {
            ja: '現場と事務所の情報共有に、毎日時間をとられていませんか？',
            en: 'Losing hours to information gaps every day?'
        },
        bg: 'from-[#1a1208] to-[#221808]',
    },
]

export default function Hero({ headline1, headline2, sub }: HeroProps) {
    const t = useTranslations('hero')
    const [current, setCurrent] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % slides.length)
                setVisible(true)
            }, 400)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const slide = slides[current]

    return (
        <section className="
      relative bg-white border-b border-[#dde2ea] overflow-hidden
      min-h-screen
      grid grid-cols-1 lg:grid-cols-2
      items-center
      px-6 md:px-16
      pt-24 pb-12 lg:pt-28 lg:pb-16
      gap-8 lg:gap-12
    ">
            {/* 左：テキスト */}
            <div className="relative z-10">
                <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-5">
                    {t('eyebrow')}
                </p>
                <h1 className="font-outfit font-bold leading-tight tracking-tight text-[#0f1923] mb-5
          text-3xl sm:text-4xl lg:text-5xl">
                    <span className="block">{headline1}</span>
                    <span className="block">{headline2}</span>
                </h1>
                <p className="text-sm leading-loose text-[#4a5568] font-light mb-8 max-w-sm">
                    {sub}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/contact"
                        className="
              font-outfit text-sm font-semibold
              px-6 py-3 bg-[#00a87a] text-white rounded
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
              px-6 py-3 border border-[#dde2ea] text-[#4a5568] rounded
              text-center
              transition-all hover:border-[#4a5568]
            "
                    >
                        {t('cta_secondary')}
                    </Link>
                </div>

                {/* ドット */}
                <div className="flex gap-3 mt-8">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setCurrent(i); setVisible(true) }}
                            className={`h-[3px] rounded-sm transition-all duration-300 ${
                                i === current ? 'w-11 bg-[#00a87a]' : 'w-7 bg-[#dde2ea]'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* 右：スライドビジュアル */}
            <div className={`
        relative rounded-xl overflow-hidden
        border border-[#dde2ea]
        bg-gradient-to-br ${slide.bg}
        transition-opacity duration-400
        ${visible ? 'opacity-100' : 'opacity-0'}
        h-64 sm:h-80 lg:h-[480px]
      `}>
                <div className="absolute top-4 left-4 z-10">
                    <p className="font-outfit text-xs font-semibold tracking-[.16em] text-[#00c896]">
                        {slide.industry.ja}
                    </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-48 h-48 rounded-full border border-white/30" />
                    <div className="absolute w-32 h-32 rounded-full border border-white/40" />
                    <div className="absolute w-16 h-16 rounded-full border border-white/60 bg-white/5" />
                </div>
                <div className="absolute bottom-4 right-4 text-right z-10 max-w-[200px]">
                    <p className="text-xs text-white/50 font-light leading-relaxed">
                        {slide.pain.ja}
                    </p>
                </div>
            </div>
        </section>
    )
}