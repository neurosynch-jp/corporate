import Image from 'next/image'
import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/Reveal'

export default async function Founder() {
    const t = await getTranslations('founder')

    return (
        <section className="founder" id="founder">
            <div className="founder-container">
                <Reveal>
                    <div className="founder-label">{t('label')}</div>
                </Reveal>
                <Reveal>
                    <h2 className="founder-headline">{t('headline')}</h2>
                </Reveal>

                <div className="founder-main">
                    <Reveal>
                        <div className="founder-portrait-block">
                            <div className="founder-portrait">
                                <Image
                                    src="/images/founder/yoshi.jpg"
                                    alt={t('imageAlt')}
                                    fill
                                    sizes="(max-width: 900px) 320px, 380px"
                                    style={{objectFit: 'cover'}}
                                />
                            </div>
                            <div className="founder-name-block">
                                <div className="founder-name-en">{t('nameEn')}</div>
                                <div className="founder-name-jp">{t('nameJp')}</div>
                                <div className="founder-role">{t('role')}</div>
                            </div>
                        </div>
                    </Reveal>

                    <div className="founder-content">
                        <Reveal>
                            <div className="founder-quote">
                                <p className="founder-quote-text">
                                    {t('quoteLine1')}<br/>
                                    <span className="em">{t('quoteLine2Em')}</span>{t('quoteLine2After')}
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="founder-bio">
                                <p>
                                    {t('bioP1Part1')}<strong>{t('bioP1Em1')}</strong>{t('bioP1Part2')}<strong>{t('bioP1Em2')}</strong>{t('bioP1Part3')}
                                </p>
                                <p>
                                    {t('bioP2Part1')}<strong>{t('bioP2Em')}</strong>{t('bioP2Part2')}
                                </p>
                                <p>
                                    {t('bioP3')}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
