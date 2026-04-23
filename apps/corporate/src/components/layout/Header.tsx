'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { useState, useEffect } from 'react'

export default function Header() {
    const t = useTranslations('nav')
    const locale = useLocale()
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // メニューを開いたときにスクロールを無効化
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const navLinks = [
        { href: '/services', label: t('services') },
        { href: '/company',  label: t('company') },
        { href: '/careers',  label: t('careers') },
    ]

    return (
        <>
            <nav className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 md:px-16 py-4
        transition-all duration-300
        bg-white/92 backdrop-blur-md border-b border-[#dde2ea]
        ${scrolled ? 'shadow-sm' : ''}
      `}>
                {/* ロゴ */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-outfit font-bold text-lg tracking-wide text-[#0f1923] no-underline"
                >
                    NEURAL<span className="text-[#00a87a]">.</span>PARTNER
                </Link>

                {/* PC：ナビリンク */}
                <ul className="hidden md:flex gap-10 list-none">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm text-[#4a5568] hover:text-[#0f1923] transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* PC：右側 */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href={pathname}
                        locale={locale === 'ja' ? 'en' : 'ja'}
                        className="text-sm text-[#8896aa] hover:text-[#4a5568] transition-colors"
                    >
                        {locale === 'ja' ? 'EN' : 'JA'}
                    </Link>
                    <Link
                        href="/contact"
                        className="
              font-outfit text-sm font-semibold tracking-wide
              px-5 py-2 rounded
              border border-[#00a87a] text-[#00a87a]
              hover:bg-[#00a87a] hover:text-white
              transition-all duration-200
            "
                    >
                        {t('contact')}
                    </Link>
                </div>

                {/* モバイル：右側 */}
                <div className="flex md:hidden items-center gap-3">
                    <Link
                        href={pathname}
                        locale={locale === 'ja' ? 'en' : 'ja'}
                        className="text-sm text-[#8896aa]"
                    >
                        {locale === 'ja' ? 'EN' : 'JA'}
                    </Link>
                    {/* ハンバーガーボタン */}
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
                        aria-label="メニュー"
                    >
            <span className={`
              block h-0.5 bg-[#0f1923] rounded transition-all duration-300
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}
            `} />
                        <span className={`
              block h-0.5 bg-[#0f1923] rounded transition-all duration-300
              ${menuOpen ? 'opacity-0' : ''}
            `} />
                        <span className={`
              block h-0.5 bg-[#0f1923] rounded transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
            `} />
                    </button>
                </div>
            </nav>

            {/* モバイルメニュー */}
            <div className={`
        fixed inset-0 z-40 bg-white
        flex flex-col pt-20 px-6 pb-8
        transition-all duration-300
        md:hidden
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
                <ul className="flex flex-col gap-0 list-none flex-1">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                  block py-5 text-lg font-medium text-[#0f1923]
                  border-b border-[#dde2ea]
                  hover:text-[#00a87a] transition-colors
                "
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="
            block text-center py-4 rounded
            bg-[#00a87a] text-white
            font-outfit font-semibold text-sm
            mt-8
          "
                >
                    {t('contact')}
                </Link>
            </div>
        </>
    )
}