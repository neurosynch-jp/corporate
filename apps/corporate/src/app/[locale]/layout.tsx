import {Noto_Sans_JP, Outfit} from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
import {routing} from '@/i18n/routing'
import {notFound} from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-noto'
})

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-outfit'
})

export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params

    return {
        metadataBase: new URL('https://neurosynch.co.jp'),
        title: {
            default: locale === 'ja'
                ? 'Neurosynch | AIエージェント導入支援'
                : 'Neurosynch | AI Agent Deployment Support',
            template: '%s | Neurosynch',
        },
        description: locale === 'ja'
            ? '名古屋を拠点に、中小企業へのAIエージェント導入を支援します。先行導入価格30万円から。IT導入補助金対応予定。'
            : 'Nagoya-based AI agent deployment support for SMEs. Early adoption from ¥300,000. IT subsidy compatible.',
        openGraph: {
            siteName: 'Neurosynch',
            locale: locale === 'ja' ? 'ja_JP' : 'en_US',
            type: 'website',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Neurosynch',
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
        },
        alternates: {
            canonical: `https://neurosynch.co.jp/${locale}`,
            languages: {
                'ja': 'https://neurosynch.co.jp/ja',
                'en': 'https://neurosynch.co.jp/en',
            }
        }
    }
}

export function generateStaticParams() {
    return routing.locales.map(locale => ({locale}))
}

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params
    if (!routing.locales.includes(locale as any)) notFound()
    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={`${notoSansJP.variable} ${outfit.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}