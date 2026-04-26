import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

const photos = [
    '/images/nagoya/pixta_74251932_L.jpg',
    '/images/nagoya/pixta_94528269_L.jpg',
    '/images/nagoya/pixta_111695733_L.jpg',
    '/images/nagoya/pixta_115323296_L.jpg',
    '/images/nagoya/pixta_117914675_L.jpg',
    '/images/nagoya/pixta_122754456_L.jpg',
    '/images/nagoya/pixta_130820758_L.jpg',
    '/images/nagoya/pixta_110567611_L.jpg',
]

export default async function NagoyaSection() {
    const t = await getTranslations('nagoya')

    return (
        <section className="py-24 px-6 md:px-16 bg-[#f7f8fa] border-t border-[#dde2ea]">
            <div className="max-w-4xl mx-auto">

                {/* ラベル・スローガン */}
                <Reveal>
                    <p className="font-outfit text-xs font-semibold tracking-[.22em] text-[#00a87a] mb-4">
                        {t('label')}
                    </p>
                    <h2 className="font-outfit text-3xl md:text-4xl font-bold text-[#0f1923] leading-snug mb-8">
                        {t('slogan')}
                    </h2>
                </Reveal>

                {/* 本文 */}
                <Reveal delay={100}>
                    <div className="mb-14 max-w-2xl">
                        {t('body').split('\n').filter(p => p.trim()).map((paragraph, i) => (
                            <p key={i} className="text-sm text-[#4a5568] leading-loose font-light mb-5">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Reveal>

                {/* 写真グリッド */}
                <Reveal delay={150}>
                    <div className="columns-2 sm:columns-3 md:columns-4 gap-2 space-y-2">
                        {photos.map((src, i) => (
                            <div
                                key={i}
                                className="break-inside-avoid overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={src}
                                    alt={`名古屋 ${i + 1}`}
                                    width={400}
                                    height={300}
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </Reveal>

            </div>
        </section>
    )
}