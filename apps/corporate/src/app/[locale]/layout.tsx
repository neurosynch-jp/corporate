import {Zen_Kaku_Gothic_Antique, Noto_Sans_JP, Outfit} from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
import {routing} from '@/i18n/routing'
import {notFound} from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/sections.css'
import '../globals.css'

const zenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--font-display',
    display: 'swap',
})

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
        <body className={`${zenKakuGothicAntique.variable} ${notoSansJP.variable} ${outfit.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}