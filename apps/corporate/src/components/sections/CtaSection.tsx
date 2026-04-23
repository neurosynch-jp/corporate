import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Reveal from '@/components/ui/Reveal'

export default function CtaSection() {
    const t = useTranslations('cta')

    return (
        <section className="py-20 px-6 md:px-16 text-center bg-[#1e3a5f]">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="inline-block mb-6">
            <span className="
              font-outfit text-xs font-semibold tracking-[.16em]
              px-4 py-1.5 rounded
              border border-[#4dd4aa]/35 text-[#4dd4aa]
            ">
              {t('badge')}
            </span>
                    </div>
                    <h2 className="
            font-outfit text-2xl md:text-3xl font-bold leading-snug
            text-white/92 mb-4 whitespace-pre-line
          ">
                        {t('title')}
                    </h2>
                    <p className="text-sm text-white/50 font-light leading-loose max-w-lg mx-auto mb-10">
                        {t('desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="
                font-outfit text-sm font-semibold
                px-8 py-3 rounded text-center
                bg-[#4dd4aa] text-[#0d2235]
                transition-all hover:bg-[#6ee0bc] hover:-translate-y-px
              "
                        >
                            {t('cta_primary')}
                        </Link>
                        <Link
                            href="/services"
                            className="
                font-outfit text-sm font-medium
                px-8 py-3 rounded text-center
                border border-white/25 text-white/70
                transition-all hover:border-white/60 hover:text-white
              "
                        >
                            {t('cta_secondary')}
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}