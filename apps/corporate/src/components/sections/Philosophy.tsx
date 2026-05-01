import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/Reveal'

export default async function Philosophy() {
    const t = await getTranslations('philosophy')

    return (
        <section className="philosophy" id="philosophy">
            <div className="philosophy-bg-grid"></div>
            <div className="philosophy-glow"></div>

            <div className="philosophy-container">
                <Reveal>
                    <div className="philosophy-label">{t('label')}</div>
                </Reveal>
                <Reveal>
                    <p className="philosophy-headline">
                        {t('headline')}
                    </p>
                </Reveal>

                {/* === 大型タイポグラフィ === */}
                <Reveal>
                    <div className="philosophy-name">
                        <div className="philosophy-name-part">neuro</div>
                        <div className="philosophy-name-cross">×</div>
                        <div className="philosophy-name-part">synch</div>
                    </div>
                </Reveal>

                {/* === 二層の意味解説 === */}
                <div className="philosophy-layers">
                    <Reveal>
                        <div className="philosophy-layer">
                            <div className="philosophy-layer-num">{t('layer1.num')}</div>
                            <div className="philosophy-layer-formula">
                                Neuro <span className="accent">×</span> Synch
                            </div>
                            <div className="philosophy-layer-meaning">
                                {t('layer1.meaning')}
                            </div>
                            <p className="philosophy-layer-text">
                                {t('layer1.textBefore')}<span className="em">{t('layer1.textEm')}</span>{t('layer1.textAfter')}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="philosophy-layer">
                            <div className="philosophy-layer-num">{t('layer2.num')}</div>
                            <div className="philosophy-layer-formula">
                                Neuro <span className="accent">×</span> Synthesis
                            </div>
                            <div className="philosophy-layer-meaning">
                                {t('layer2.meaning')}
                            </div>
                            <p className="philosophy-layer-text">
                                {t('layer2.textBefore')}<span className="em">{t('layer2.textEm')}</span>{t('layer2.textAfter')}
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* === 締めのステートメント === */}
                <Reveal>
                    <div className="philosophy-statement">
                        <p className="philosophy-statement-main">
                            {t('statementBefore')}<br/><span className="em">{t('statementEm')}</span>{t('statementAfter')}
                        </p>
                        <div className="philosophy-statement-sub">— {t('statementSub')}</div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
