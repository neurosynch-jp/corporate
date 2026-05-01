import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/Reveal'

interface ProblemItem {
    number: string
    title: string
    desc: string
}

export default async function Problem() {
    const t = await getTranslations('problem')

    // 配列データは raw() で取得
    const items = t.raw('items') as ProblemItem[]

    return (
        <section className="problem" id="problem">
            <div className="problem-container">
                <Reveal>
                    <div className="section-label">{t('label1')}</div>
                </Reveal>
                <Reveal>
                    <h2 className="problem-headline">
                        {t('headline1Line1')}<br/>{t('headline1Line2')}
                    </h2>
                </Reveal>

                <Reveal>
                    <div className="data-grid">
                        <div className="data-card">
                            <div className="data-card-label">{t('data.card1.label')}</div>
                            <div className="data-card-number">
                                {t('data.card1.value')}<span className="unit">{t('data.card1.unit')}</span>
                            </div>
                            <div className="data-card-desc">{t('data.card1.desc')}</div>
                            <div className="data-card-source">{t('data.card1.source')}</div>
                        </div>

                        <div className="data-card highlight">
                            <div className="data-card-label">{t('data.card2.label')}</div>
                            <div className="data-card-number">
                                {t('data.card2.value')}<span className="unit">{t('data.card2.unit')}</span>
                            </div>
                            <div className="data-card-desc">{t('data.card2.desc')}</div>
                            <div className="data-card-source">{t('data.card2.source')}</div>
                        </div>

                        <div className="data-card">
                            <div className="data-card-label">{t('data.card3.label')}</div>
                            <div className="data-card-number">
                                {t('data.card3.value')}<span className="unit">{t('data.card3.unit')}</span>
                            </div>
                            <div className="data-card-desc">{t('data.card3.desc')}</div>
                            <div className="data-card-source">{t('data.card3.source')}</div>
                        </div>
                    </div>
                </Reveal>

                <div className="problems-section">
                    <Reveal>
                        <div className="section-label">{t('label2')}</div>
                    </Reveal>
                    <Reveal>
                        <h3 className="problem-headline"
                            style={{fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '32px'}}>
                            {t('headline2')}
                        </h3>
                    </Reveal>
                    <Reveal>
                        <p className="problems-intro">{t('intro')}</p>
                    </Reveal>

                    <div className="problems-list">
                        {items.map((item) => (
                            <Reveal key={item.number}>
                                <div className="problem-item">
                                    <div className="problem-number">{item.number}</div>
                                    <h4 className="problem-title">{item.title}</h4>
                                    <p className="problem-desc">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal>
                    <div className="closing-statement">
                        <p className="closing-text">
                            {t('closingLine1')}<br/>
                            {t('closingLine2Before')}<span
                            className="em">{t('closingLine2Em')}</span>{t('closingLine2After')}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
