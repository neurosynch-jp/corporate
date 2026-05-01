import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/ui/Reveal'
import NagoyaSection from '@/components/sections/NagoyaSection'

export default async function CompanyPage({
                                              params
                                          }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    const t = await getTranslations('company')

    const infoRows = [
        {label: t('info_name_label'),        value: t('info_name_value')},
        {label: t('info_established_label'), value: t('info_established_value')},
        {label: t('info_ceo_label'),         value: t('info_ceo_value')},
        {label: t('info_capital_label'),     value: t('info_capital_value')},
        {label: t('info_address_label'),     value: t('info_address_value')},
        {label: t('info_business_label'),    value: t('info_business_value')},
        {label: t('info_url_label'),         value: t('info_url_value')},
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

            {/* ミッション・ビジョン */}
            <section className="py-24 px-16 bg-[#1e3a5f]">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-white/40 mb-8">
                            {t('mission_label')}
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-2 gap-6">
                        {/* ミッション */}
                        <Reveal delay={0}>
                            <div className="bg-white/4 border border-white/10 rounded-xl p-10">
                                <p className="font-outfit text-xs font-semibold tracking-[.2em] text-[#4dd4aa] mb-4">
                                    MISSION
                                </p>
                                <h2 className="font-outfit text-xl font-bold text-white/92 leading-snug mb-4">
                                    {t('mission_headline')}
                                </h2>
                                <p className="text-sm text-white/50 font-light leading-loose">
                                    {t('mission_body')}
                                </p>
                            </div>
                        </Reveal>

                        {/* ビジョン */}
                        <Reveal delay={120}>
                            <div className="bg-white/4 border border-white/10 rounded-xl p-10"
                                 style={{background: 'rgba(36,63,106,0.6)'}}>
                                <p className="font-outfit text-xs font-semibold tracking-[.2em] text-[#4dd4aa] mb-4">
                                    VISION
                                </p>
                                <h2 className="font-outfit text-xl font-bold text-white/92 leading-snug mb-4">
                                    {t('vision_headline')}
                                </h2>
                                <p className="text-sm text-white/50 font-light leading-loose">
                                    {t('vision_body')}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 代表者メッセージ */}
            <section className="py-24 px-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-3">
                            {t('message_label')}
                        </p>
                        <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-12">
                            {t('message_title')}
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-[280px_1fr] gap-16 items-start">
                        {/* プロフィール */}
                        <Reveal>
                            <div className="sticky top-28">
                                <div className="w-48 h-48 rounded-lg mb-6 bg-[#f7f8fa] border border-[#dde2ea] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-[#dde2ea] mx-auto mb-2"/>
                                        <div className="w-20 h-2 bg-[#dde2ea] rounded mx-auto"/>
                                    </div>
                                </div>
                                <p className="font-bold text-lg text-[#0f1923] mb-1">
                                    {t('representative_name')}
                                </p>
                                <p className="text-sm text-[#8896aa] font-light mb-3">
                                    {t('representative_name_en')}
                                </p>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#e6f7f2] text-[#00a87a] text-xs font-medium border border-[#00a87a]/20">
                                    {t('representative_title')}
                                </span>
                            </div>
                        </Reveal>

                        {/* メッセージ本文 */}
                        <Reveal delay={120}>
                            <div>
                                {/* 引用文 */}
                                <div className="flex items-start gap-2 mb-8">
                                    <span className="text-[#00a87a] font-outfit text-4xl leading-none mt-1 flex-shrink-0">
                                        &ldquo;
                                    </span>
                                    <p className="font-outfit text-xl font-bold text-[#0f1923] leading-snug">
                                        {t('representative_quote')}
                                    </p>
                                    <span className="text-[#00a87a] font-outfit text-4xl leading-none self-end flex-shrink-0">
                                        &rdquo;
                                    </span>
                                </div>

                                {/* 本文 - 改行で段落分割 */}
                                <div className="text-sm text-[#4a5568] font-light leading-loose space-y-5">
                                    {t('representative_message')
                                        .split('\n')
                                        .filter((p: string) => p.trim())
                                        .map((paragraph: string, i: number) => (
                                            <p key={i}>{paragraph}</p>
                                        ))
                                    }
                                </div>

                                {/* 署名 */}
                                <div className="mt-8 pt-6 border-t border-[#dde2ea] text-sm text-[#8896aa] font-light">
                                    株式会社ニューロシンク 代表取締役<br/>
                                    <span className="font-medium text-[#4a5568]">
                                        {t('representative_name')}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 名古屋セクション */}
            <NagoyaSection/>

            {/* 会社情報テーブル */}
            <section className="py-24 px-16 bg-[#f7f8fa] border-t border-[#dde2ea]">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-3">
                            {t('info_label')}
                        </p>
                        <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-10">
                            {t('info_title')}
                        </h2>
                    </Reveal>

                    <Reveal delay={100}>
                        <table className="w-full border-collapse">
                            <tbody>
                            {infoRows.map((row, i) => (
                                <tr key={i} className={`border-b border-[#dde2ea] ${i === 0 ? 'border-t' : ''}`}>
                                    <th className="w-40 py-5 px-6 text-left text-sm font-medium text-[#8896aa] bg-white font-outfit tracking-wide">
                                        {row.label}
                                    </th>
                                    <td className="py-5 px-6 text-sm text-[#4a5568] font-light leading-relaxed bg-white">
                                        {row.value}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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
    const {locale} = await params

    return {
        title: locale === 'ja' ? '会社概要' : 'Company',
        description: locale === 'ja'
            ? '株式会社ニューロシンク。名古屋市南区。代表取締役：久野嘉樹。AIエージェント導入支援・Webアプリ開発。'
            : 'Neurosynch Co., Ltd. Nagoya. CEO: Yoshiki Kuno. AI agent deployment & web application development.',
        openGraph: {
            title: locale === 'ja' ? '会社概要 | Neurosynch' : 'Company | Neurosynch',
            url: `https://neurosynch.co.jp/${locale}/company`,
            images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'Neurosynch'}]
        }
    }
}
