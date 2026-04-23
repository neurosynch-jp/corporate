import { useTranslations } from 'next-intl'
import Reveal from '@/components/ui/Reveal'

export default function Problem() {
    const t = useTranslations('problem')

    const barriers = [
        { num: '01', title: t('barrier1_title'), desc: t('barrier1_desc') },
        { num: '02', title: t('barrier2_title'), desc: t('barrier2_desc') },
        { num: '03', title: t('barrier3_title'), desc: t('barrier3_desc') },
    ]

    return (
        <section className="py-20 px-6 md:px-16 bg-[#f7f8fa]">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                        {t('label')}
                    </p>
                    <h2 className="font-outfit text-2xl md:text-3xl font-bold leading-snug text-[#0f1923] mb-6 whitespace-pre-line">
                        {t('title')}
                    </h2>
                    <p className="text-sm text-[#4a5568] leading-loose font-light max-w-lg mb-10">
                        {t('lead')}
                    </p>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {barriers.map((barrier, i) => (
                        <Reveal key={barrier.num} delay={i * 100}>
                            <div className="
                group p-7
                bg-white border border-[#dde2ea] rounded-lg
                relative overflow-hidden
                transition-all duration-200
                hover:border-[#00a87a] hover:shadow-lg
              ">
                                <div className="
                  absolute top-0 left-0 right-0 h-[3px]
                  bg-[#00a87a] opacity-0
                  transition-opacity duration-200
                  group-hover:opacity-100
                " />
                                <p className="font-outfit text-4xl font-bold text-[#00a87a]/13 leading-none mb-3">
                                    {barrier.num}
                                </p>
                                <h3 className="text-sm font-bold text-[#0f1923] mb-2">
                                    {barrier.title}
                                </h3>
                                <p className="text-xs text-[#4a5568] leading-relaxed font-light">
                                    {barrier.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}