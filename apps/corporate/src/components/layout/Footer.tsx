import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function Footer() {
    const t = useTranslations('footer')

    return (
        <footer className="
      flex flex-col sm:flex-row
      justify-between items-center gap-4
      px-6 md:px-16 py-8
      border-t border-[#dde2ea]
      bg-[#f7f8fa]
    ">
            <div className="font-outfit font-bold text-sm tracking-wide text-[#8896aa]">
                NEURAL<span className="text-[#00a87a]">.</span>PARTNER
            </div>
            <p className="text-xs text-[#8896aa] text-center sm:text-right">
                {t('copyright')}　|
                <Link href="/privacy" className="text-[#8896aa] hover:text-[#4a5568] transition-colors">
                    {t('privacy')}
                </Link>
            </p>
        </footer>
    )
}