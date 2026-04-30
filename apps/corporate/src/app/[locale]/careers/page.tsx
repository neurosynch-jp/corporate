import { getTranslations } from 'next-intl/server'
import { getStory } from '@/lib/getStory'
import Reveal from '@/components/ui/Reveal'

type CareersContent = {
    philosophy_quote: string
    philosophy_body: string
    appeal_text: string
}

export default async function CareersPage({
                                              params
                                          }: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const story = await getStory('careers', locale)
    const content = story?.content as CareersContent | null
    const t = await getTranslations('careers')

    const features = [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
    ]

    const required = [t('req1'), t('req2'), t('req3')]

    const preferred = [
        t('pref1'), t('pref2'), t('pref3'), t('pref4'), t('pref5'),
    ]

    const conditions = [
        { label: t('cond1_label'), value: t('cond1_value') },
        { label: t('cond2_label'), value: t('cond2_value') },
        { label: t('cond3_label'), value: t('cond3_value') },
        { label: t('cond4_label'), value: t('cond4_value') },
        { label: t('cond5_label'), value: t('cond5_value') },
        { label: t('cond6_label'), value: t('cond6_value') },
        { label: t('cond7_label'), value: t('cond7_value') },
        { label: t('cond8_label'), value: t('cond8_value') },
    ]

    return (
        <>
            {/* ページヘッダー */}
            <div className="pt-36 pb-20 px-16 bg-white border-b border-[#dde2ea]">
                <div className="max-w-4xl mx-auto">
                    <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                        {t('label')}
                    </p>
                    <h1 className="font-outfit text-4xl font-bold text-[#0f1923] mb-5">
                        {t('title')}
                    </h1>
                    <p className="text-sm text-[#4a5568] leading-loose font-light max-w-lg">
                        {t('lead')}
                    </p>
                </div>
            </div>

            {/* 現在募集なしバナー */}
            <div className="bg-[#fff8e6] border-t-4 border-b-4 border-[#e0a020] px-16 py-10">
                <div className="max-w-4xl mx-auto flex items-center gap-6 flex-wrap">
                    <div className="
            w-14 h-14 rounded-full flex-shrink-0
            bg-[#fef3c7] border-2 border-[#f0c040]
            flex items-center justify-center text-2xl
          ">
                        ⚠
                    </div>
                    <div className="flex-1">
                        <p className="font-outfit font-bold text-lg text-[#92400e] mb-1">
                            {t('no_hiring_title')}
                        </p>
                        <p className="text-sm text-[#a16207] font-light leading-relaxed">
                            {t('no_hiring_desc')}
                        </p>
                    </div>
                    <div className="
            font-outfit text-xs font-semibold tracking-wide
            px-4 py-2 rounded-full flex-shrink-0
            bg-[#fef3c7] text-[#92400e]
            border border-[#f0c040]
          ">
                        {t('no_hiring_badge')}
                    </div>
                </div>
            </div>

            {/* フィロソフィー */}
            <section className="py-24 px-16 bg-[#1e3a5f]">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-white/40 mb-8">
                            {t('philosophy_label')}
                        </p>
                        <blockquote className="font-outfit text-2xl font-bold text-white/92 leading-snug mb-8 max-w-xl">
                            {content?.philosophy_quote}
                        </blockquote>
                        <div className="text-sm text-white/50 font-light leading-loose max-w-xl space-y-4">
                            {content?.philosophy_body
                                ?.split('\n')
                                .filter(p => p.trim())
                                .map((p, i) => <p key={i}>{p}</p>)
                            }
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 求人票 */}
            <section className="py-24 px-16 bg-[#f7f8fa]">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-3">
                            {t('job_label')}
                        </p>
                        <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-10">
                            {t('job_title')}
                        </h2>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="bg-white border border-[#dde2ea] rounded-xl overflow-hidden">

                            {/* カードヘッダー */}
                            <div className="px-10 pt-10 pb-0">
                                <p className="font-outfit text-xs font-semibold tracking-[.2em] text-[#00a87a] mb-3">
                                    Neurosynch — 採用情報
                                </p>
                                <h3 className="font-outfit text-2xl font-bold text-[#0f1923] leading-snug mb-2">
                                    {t('position_title')}
                                </h3>
                                <p className="text-sm text-[#8896aa] font-light mb-6">
                                    {t('position_sub')}
                                </p>

                                {/* アピールボックス */}
                                <div className="bg-[#fff8e6] border-l-4 border-[#e0a020] rounded-r-lg px-5 py-4 mb-0">
                                    <p className="text-sm text-[#7a4f00] font-medium leading-relaxed">
                                        {content?.appeal_text}
                                    </p>
                                </div>
                            </div>

                            {/* 給与バー */}
                            <div className="bg-[#1e3a5f] px-10 py-5 flex items-center justify-between flex-wrap gap-4 mt-6">
                                <div>
                                    <p className="font-outfit text-xs text-white/45 tracking-wide mb-1">
                                        {t('salary_label')}
                                    </p>
                                    <p className="font-outfit text-2xl font-bold text-white">
                                        {t('salary_value')}
                                    </p>
                                    <p className="text-xs text-white/40 font-light mt-1">
                                        {t('salary_note')}
                                    </p>
                                </div>
                                <div className="
                  bg-[#4dd4aa] text-[#0d2235]
                  font-outfit text-xs font-bold
                  px-4 py-2 rounded-full
                ">
                                    {t('salary_badge')}
                                </div>
                            </div>

                            {/* 本文 */}
                            <div className="px-10 py-10 space-y-10">

                                {/* この仕事の特徴 */}
                                <div>
                                    <p className="font-outfit text-xs font-semibold tracking-[.18em] text-[#8896aa] border-b border-[#dde2ea] pb-3 mb-5">
                                        {t('features_label')}
                                    </p>
                                    <ul className="space-y-3">
                                        {features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[#4a5568] font-light leading-relaxed">
                                                <span className="w-2 h-2 rounded-full bg-[#00a87a] flex-shrink-0 mt-2" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 必須要件 */}
                                <div>
                                    <p className="font-outfit text-xs font-semibold tracking-[.18em] text-[#8896aa] border-b border-[#dde2ea] pb-3 mb-5">
                                        {t('required_label')}
                                    </p>
                                    <ul className="space-y-3">
                                        {required.map((r, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[#4a5568] font-light leading-relaxed">
                                                <span className="w-2 h-2 rounded-full bg-[#00a87a] flex-shrink-0 mt-2" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 歓迎要件 */}
                                <div>
                                    <p className="font-outfit text-xs font-semibold tracking-[.18em] text-[#8896aa] border-b border-[#dde2ea] pb-3 mb-5">
                                        {t('preferred_label')}
                                    </p>
                                    <ul className="space-y-3">
                                        {preferred.map((p, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[#4a5568] font-light leading-relaxed">
                                                <span className="w-2 h-2 rounded-full bg-[#dde2ea] flex-shrink-0 mt-2" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 勤務条件 */}
                                <div>
                                    <p className="font-outfit text-xs font-semibold tracking-[.18em] text-[#8896aa] border-b border-[#dde2ea] pb-3 mb-5">
                                        {t('conditions_label')}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {conditions.map((c, i) => (
                                            <div key={i} className="bg-[#f7f8fa] rounded-lg px-4 py-3 border border-[#dde2ea]">
                                                <p className="font-outfit text-[10px] font-semibold tracking-wide text-[#8896aa] mb-1">
                                                    {c.label}
                                                </p>
                                                <p className="text-sm text-[#4a5568] font-light leading-snug">
                                                    {c.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 事前登録 */}
            <section className="py-24 px-16 bg-white border-t border-[#dde2ea]">
                <div className="max-w-4xl mx-auto grid grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div>
                            <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                                PRE-REGISTRATION
                            </p>
                            <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-4">
                                {t('prereg_title')}
                            </h2>
                            <p className="text-sm text-[#4a5568] font-light leading-loose">
                                {t('prereg_desc')}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="bg-[#f7f8fa] border border-[#dde2ea] rounded-xl p-8">
                            <p className="font-outfit text-xs font-semibold tracking-wide text-[#8896aa] mb-6">
                                事前登録の流れ
                            </p>
                            {[t('prereg_step1'), t('prereg_step2'), t('prereg_step3')].map((step, i) => (
                                <div key={i} className="flex items-start gap-3 mb-4">
                                    <div className="
                    w-6 h-6 rounded-full flex-shrink-0
                    bg-[#e6f7f2] border border-[#00a87a]/30
                    text-[#00a87a] font-outfit font-bold text-xs
                    flex items-center justify-center
                  ">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-[#4a5568] font-light leading-relaxed">
                                        {step}
                                    </p>
                                </div>
                            ))}
                            <div className="mt-6 pt-6 border-t border-[#dde2ea]">
                                <p className="font-outfit text-xs font-semibold tracking-wide text-[#8896aa] mb-2">
                                    {t('prereg_contact_label')}
                                </p>
                                <p className="font-outfit text-base font-semibold text-[#00a87a]">
                                    {t('prereg_email')}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    )
}

export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    return {
        title: locale === 'ja' ? '採用情報' : 'Careers',
        description: locale === 'ja'
            ? '2028年採用予定。AIエージェント・Webアプリのエンジニアを募集。年収600〜700万円。事前登録受付中。'
            : 'Hiring in 2028. AI agent & web app engineers. ¥6M–¥7M. Pre-registration open.',
        openGraph: {
            title: locale === 'ja' ? '採用情報 | Neurosynch' : 'Careers | Neurosynch',
            url: `https://neurosynch.co.jp/${locale}/careers`,
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