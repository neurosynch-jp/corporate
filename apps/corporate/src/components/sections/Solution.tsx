import { useTranslations } from 'next-intl'
import Reveal from '@/components/ui/Reveal'

export default function Solution() {
    const t = useTranslations('solution')
    const points = [t('point1'), t('point2'), t('point3')]

    return (
        <section className="bg-white py-20 px-6 md:px-16 border-t border-b border-[#dde2ea]">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* ビジュアル */}
                <Reveal>
                    <div className="relative h-64 lg:h-72 flex items-center justify-center">
                        <div className="absolute w-64 lg:w-72 h-64 lg:h-72 rounded-full border border-[#00a87a]/18" />
                        <div className="absolute w-48 lg:w-52 h-48 lg:h-52 rounded-full border border-[#00a87a]/30 animate-spin [animation-duration:22s]" />
                        <div className="absolute w-28 lg:w-32 h-28 lg:h-32 rounded-full border border-[#00a87a]/50 bg-[#00a87a]/5" />
                        <div className="relative text-center z-10">
                            <p className="font-outfit text-[10px] font-semibold tracking-[.16em] text-[#00a87a]">
                                AI AGENT
                            </p>
                            <p className="font-outfit text-base font-bold text-[#0f1923] mt-1">
                                御社の業務
                            </p>
                        </div>
                        {[
                            { label: 'ヒアリング・設計', pos: 'top-[4%] left-1/2 -translate-x-1/2' },
                            { label: '構築・開発',       pos: 'top-1/2 right-0 -translate-y-1/2' },
                            { label: '運用・改善',       pos: 'bottom-[4%] left-1/2 -translate-x-1/2' },
                            { label: 'サポート',         pos: 'top-1/2 left-0 -translate-y-1/2' },
                        ].map(node => (
                            <div
                                key={node.label}
                                className={`
                  absolute ${node.pos}
                  bg-white border border-[#00a87a]/28 rounded
                  px-2 lg:px-3 py-1 lg:py-1.5
                  font-outfit text-[10px] lg:text-[11px] text-[#4a5568]
                  shadow-sm whitespace-nowrap
                `}
                            >
                                {node.label}
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* テキスト */}
                <Reveal delay={150}>
                    <div>
                        <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                            {t('label')}
                        </p>
                        <h2 className="font-outfit text-2xl md:text-3xl font-bold leading-snug text-[#0f1923] mb-6 whitespace-pre-line">
                            {t('title')}
                        </h2>
                        <p className="text-sm text-[#4a5568] leading-loose font-light mb-8">
                            {t('desc')}
                        </p>
                        <div className="flex flex-col gap-4">
                            {points.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm">
                                    <div className="
                    w-5 h-5 rounded-full flex-shrink-0 mt-0.5
                    bg-[#e6f7f2] border border-[#00a87a]/30
                    flex items-center justify-center
                    text-[#00a87a] text-[10px]
                  ">
                                        ✓
                                    </div>
                                    <p className="text-[#4a5568] font-light leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}