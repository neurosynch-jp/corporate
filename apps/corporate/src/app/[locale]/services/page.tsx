import {getTranslations} from 'next-intl/server'
import {getStory} from '@/lib/getStory'
import Reveal from '@/components/ui/Reveal'
import {Link} from '@/i18n/routing'

type ServicesContent = {
    service_headline: string
    service_lead: string
    appeal_text: string
}

export default async function ServicesPage({
                                               params
                                           }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    const story = await getStory('services', locale)
    const content = story?.content as ServicesContent | null
    const t = await getTranslations('services')

    const strengths = [
        {title: t('strength1_title'), desc: t('strength1_desc')},
        {title: t('strength2_title'), desc: t('strength2_desc')},
        {title: t('strength3_title'), desc: t('strength3_desc')},
        {title: t('strength4_title'), desc: t('strength4_desc')},
        {title: t('strength5_title'), desc: t('strength5_desc')},
        {title: t('strength6_title'), desc: t('strength6_desc')},
    ]

    const steps = [
        {name: t('step1_name'), duration: t('step1_duration'), desc: t('step1_desc')},
        {name: t('step2_name'), duration: t('step2_duration'), desc: t('step2_desc')},
        {name: t('step3_name'), duration: t('step3_duration'), desc: t('step3_desc')},
        {name: t('step4_name'), duration: t('step4_duration'), desc: t('step4_desc')},
        {name: t('step5_name'), duration: t('step5_duration'), desc: t('step5_desc')},
    ]

    return (
        <>
            {/* ページヘッダー */}
            <div className="pt-36 pb-20 px-16 bg-white border-b border-[#dde2ea]">
                <div className="max-w-4xl mx-auto">
                    <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                        {t('label')}
                    </p>
                    <h1 className="font-outfit text-4xl font-bold leading-snug text-[#0f1923] mb-5 whitespace-pre-line">
                        {t('title')}
                    </h1>
                    <p className="text-sm text-[#4a5568] leading-loose font-light max-w-lg">
                        {t('lead')}
                    </p>
                </div>
            </div>

            {/* サービス概要 */}
            <section className="py-24 px-16 bg-white">
                <div className="max-w-4xl mx-auto grid grid-cols-2 gap-16 items-start">
                    <Reveal>
                        <div>
                            <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                                {t('main_label')}
                            </p>
                            <h2 className="font-outfit text-3xl font-bold text-[#0f1923] mb-6">
                                {content?.service_headline}
                            </h2>
                            <p className="text-sm text-[#4a5568] leading-loose font-light mb-8">
                                {content?.service_lead}
                            </p>
                        </div>
                    </Reveal>

                    {/* 価格カード */}
                    <Reveal delay={150}>
                        <div className="bg-[#f7f8fa] border border-[#dde2ea] rounded-xl p-8">
                            <div
                                className="inline-block bg-[#00a87a] text-white font-outfit text-xs font-semibold tracking-wide px-3 py-1 rounded mb-4">
                                {t('price_badge')}
                            </div>
                            <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[#8896aa] line-through text-base font-light">
                  {t('price_from')}
                </span>
                                <span className="font-outfit text-4xl font-bold text-[#0f1923]">
                  {t('price_current')}
                </span>
                            </div>
                            <p className="text-xs text-[#8896aa] font-light leading-relaxed mb-6">
                                {t('price_note')}
                            </p>
                            <div className="border-t border-[#dde2ea] pt-6">
                                <p className="font-outfit text-xs font-semibold tracking-wide text-[#8896aa] mb-3">
                                    {t('maintenance_label')}
                                </p>
                                <p className="font-outfit text-2xl font-bold text-[#0f1923] mb-2">
                                    {t('maintenance_price')}
                                </p>
                                <p className="text-xs text-[#8896aa] font-light leading-relaxed">
                                    {t('maintenance_desc')}
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="
                  block text-center mt-6 py-3 rounded
                  bg-[#00a87a] text-white
                  font-outfit text-sm font-semibold
                  hover:bg-[#007d5a] transition-colors
                "
                            >
                                無料ヒアリングを申し込む
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 強み6項目 */}
            <section className="py-24 px-16 bg-[#f7f8fa] border-t border-[#dde2ea]">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-3">
                            {t('why_label')}
                        </p>
                        <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-12">
                            {t('why_title')}
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-3 gap-5">
                        {strengths.map((s, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <div className="
                  group p-6 bg-white rounded-lg
                  border border-[#dde2ea]
                  hover:border-[#00a87a] hover:shadow-md
                  transition-all duration-200 relative overflow-hidden
                ">
                                    <div className="
                    absolute top-0 left-0 right-0 h-[3px] bg-[#00a87a]
                    opacity-0 group-hover:opacity-100 transition-opacity
                  "/>
                                    <div className="
                    w-8 h-8 rounded-lg bg-[#e6f7f2] mb-4
                    flex items-center justify-center
                    text-[#00a87a] text-sm
                  ">
                                        ✓
                                    </div>
                                    <h3 className="text-sm font-bold text-[#0f1923] mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-xs text-[#4a5568] font-light leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 制作の流れ */}
            <section className="py-24 px-16 bg-[#eef4f0] border-t border-[#dde2ea]">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-3">
                            {t('process_label')}
                        </p>
                        <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-2">
                            {t('process_title')}
                        </h2>
                        <p className="text-sm text-[#4a5568] font-light mb-12">
                            {t('process_sub')}
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-5 gap-4">
                        {steps.map((step, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <div className="relative flex flex-col items-center text-center">
                                    {/* 丸番号 */}
                                    <div className="
                    w-12 h-12 rounded-full bg-[#1e3a5f] text-white
                    font-outfit font-bold text-sm
                    flex items-center justify-center mb-3 z-10
                  ">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* 矢印 */}
                                    {i < steps.length - 1 && (
                                        <div className="
                      absolute top-5 left-[calc(50%+24px)] right-[-calc(50%-24px)]
                      h-px bg-[#00a87a] w-full
                    "/>
                                    )}

                                    {/* 期間バッジ */}
                                    <div className="
                    inline-block px-3 py-1 rounded-full mb-2
                    bg-[#e6f7f2] text-[#00a87a]
                    font-outfit text-xs font-semibold
                    border border-[#00a87a]/20
                  ">
                                        {step.duration}
                                    </div>

                                    {/* ステップ名 */}
                                    <p className="font-bold text-xs text-[#0f1923] mb-2 whitespace-pre-line">
                                        {step.name}
                                    </p>

                                    {/* 説明 */}
                                    <p className="text-[11px] text-[#4a5568] font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* 補助金バナー */}
                    <Reveal>
                        <div className="mt-16 bg-[#1e3a5f] rounded-lg px-8 py-5 flex items-center gap-6">
                            <div className="flex-1">
                                <p className="text-xs text-[#7aafcf] font-light mb-1">
                                    {t('subsidy_label')}
                                </p>
                                <p className="text-sm text-white font-bold">
                                    {t('subsidy_desc')}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-16 text-center bg-white border-t border-[#dde2ea]">
                <Reveal>
                    <div className="max-w-lg mx-auto">
                        <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-4">
                            まず、話を聞いてみませんか。
                        </h2>
                        <p className="text-sm text-[#4a5568] font-light leading-loose mb-8">
                            無料のヒアリングで、御社の業務課題をお聞きします。費用が発生するのは、導入を決定された後からです。
                        </p>
                        <Link
                            href="/contact"
                            className="
                inline-block font-outfit text-sm font-semibold
                px-10 py-3 rounded
                bg-[#00a87a] text-white
                hover:bg-[#007d5a] transition-colors
              "
                        >
                            無料ヒアリングを申し込む
                        </Link>
                    </div>
                </Reveal>
            </section>
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
            ? 'サービス | AIエージェント導入パッケージ'
            : 'Services | AI Agent Onboarding Package',
        description: locale === 'ja'
            ? 'AIエージェントの設計・構築から運用定着まで一貫サポート。先行導入価格30万円。翌日プロトタイプ提示。'
            : 'End-to-end AI agent deployment support. Early adoption at ¥300,000. Prototype presented same day.',
        openGraph: {
            title: locale === 'ja' ? 'AIエージェント導入パッケージ' : 'AI Agent Onboarding Package',
            url: `https://neurosynch.co.jp/${locale}/services`,
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