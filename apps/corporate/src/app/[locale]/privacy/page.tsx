import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/ui/Reveal'

export default async function PrivacyPage({
                                              params
                                          }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    const t = await getTranslations('privacy')

    const sections = [
        {title: t('s1_title'), body: t('s1_body')},
        {title: t('s2_title'), body: t('s2_body')},
        {title: t('s3_title'), body: t('s3_body')},
        {title: t('s4_title'), body: t('s4_body')},
        {title: t('s5_title'), body: t('s5_body')},
        {title: t('s6_title'), body: t('s6_body')},
    ]

    return (
        <>
            {/* ページヘッダー */}
            <div className="pt-36 pb-16 px-16 bg-white border-b border-[#dde2ea]">
                <div className="max-w-3xl mx-auto">
                    <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                        {t('label')}
                    </p>
                    <h1 className="font-outfit text-4xl font-bold text-[#0f1923] mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xs text-[#8896aa] font-light">
                        {t('updated')}
                    </p>
                </div>
            </div>

            {/* 本文 */}
            <section className="py-20 px-16 bg-[#f7f8fa]">
                <div className="max-w-3xl mx-auto">

                    {/* イントロ */}
                    <Reveal>
                        <p className="text-sm text-[#4a5568] font-light leading-loose mb-12 pb-12 border-b border-[#dde2ea]">
                            {t('intro')}
                        </p>
                    </Reveal>

                    {/* セクション */}
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <Reveal key={i} delay={i * 60}>
                                <div className="bg-white rounded-xl p-8 border border-[#dde2ea]">
                                    <h2 className="font-outfit text-base font-bold text-[#0f1923] mb-4">
                                        {section.title}
                                    </h2>
                                    <div className="text-sm text-[#4a5568] font-light leading-loose">
                                        {section.body.split('\n').map((line, j) => (
                                            <p key={j}
                                               className={line.startsWith('·') || line.startsWith('・') ? 'pl-3' : ''}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}