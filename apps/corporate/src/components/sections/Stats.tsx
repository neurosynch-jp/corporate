import { useTranslations } from 'next-intl'
import Reveal from '@/components/ui/Reveal'

export default function Stats() {
    const t = useTranslations('stats')

    const items = [
        { num: t('stat1_num'), label: t('stat1_label') },
        { num: t('stat2_num'), label: t('stat2_label') },
        { num: t('stat3_num'), label: t('stat3_label') },
    ]

    return (
        <section className="bg-[#1e3a5f] py-12 px-6 md:px-16 border-b border-[#163058]">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3">
                {items.map((item, i) => (
                    <Reveal key={i} delay={i * 120}>
                        <div className="relative text-center px-6 py-6 sm:py-0">
                            {/* PC区切り線 */}
                            {i > 0 && (
                                <div className="
                  hidden sm:block
                  absolute left-0 top-1/2 -translate-y-1/2
                  w-px h-14 bg-white/10
                " />
                            )}
                            {/* SP区切り線 */}
                            {i > 0 && (
                                <div className="sm:hidden w-16 h-px bg-white/10 mx-auto mb-6" />
                            )}
                            <p className="font-outfit text-4xl font-bold text-[#4dd4aa] leading-none mb-3">
                                {item.num}
                            </p>
                            <p className="text-xs text-white/45 leading-relaxed whitespace-pre-line font-light">
                                {item.label}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}