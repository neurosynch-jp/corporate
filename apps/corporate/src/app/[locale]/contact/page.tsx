import {getTranslations} from 'next-intl/server'
import {Link} from '@/i18n/routing'
import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/sections/ContactForm'

export default async function ContactPage({
                                              params
                                          }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    const t = await getTranslations('contact')

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

            <section className="py-24 px-16 bg-[#f7f8fa]">
                <div className="max-w-4xl mx-auto grid grid-cols-[1fr_480px] gap-16 items-start">

                    {/* 左：注意書き */}
                    <Reveal>
                        <div className="sticky top-28">
                            {/* 開発依頼は別ページへ */}
                            <div className="
                bg-[#e6f7f2] border border-[#00a87a]/25
                rounded-xl p-7 mb-8
              ">
                                <h2 className="font-outfit font-bold text-sm text-[#0f1923] mb-2">
                                    {t('notice_title')}
                                </h2>
                                <p className="text-sm text-[#4a5568] font-light leading-relaxed mb-4">
                                    {t('notice_desc')}
                                </p>
                                <Link
                                    href="/services"
                                    className="
                    inline-flex items-center gap-2
                    font-outfit text-sm font-semibold text-[#00a87a]
                    hover:text-[#007d5a] transition-colors
                  "
                                >
                                    {t('notice_link')}
                                    <span>→</span>
                                </Link>
                            </div>

                            {/* 連絡先情報 */}
                            <div className="text-sm text-[#4a5568] font-light space-y-2">
                                <p className="font-outfit font-semibold text-xs tracking-wide text-[#8896aa] mb-3">
                                    DIRECT CONTACT
                                </p>
                                <p>株式会社Neurosynch</p>
                                <p>〒457-0833</p>
                                <p>愛知県名古屋市南区東又兵ヱ町2-13</p>
                                <p className="text-[#00a87a] mt-3">
                                    info@neurosynch.co.jp
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* 右：フォーム */}
                    <Reveal delay={120}>
                        <div className="bg-white border border-[#dde2ea] rounded-xl p-10">
                            <ContactForm/>
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
    const {locale} = await params

    return {
        title: locale === 'ja' ? 'お問い合わせ' : 'Contact',
        description: locale === 'ja'
            ? '採用・取材・提携など、お気軽にお問い合わせください。'
            : 'Get in touch for careers, press, partnerships, and other enquiries.',
        openGraph: {
            title: locale === 'ja' ? 'お問い合わせ | Neurosynch' : 'Contact | Neurosynch',
            url: `https://neurosynch.co.jp/${locale}/contact`,
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