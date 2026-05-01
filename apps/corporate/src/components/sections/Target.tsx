import Image from 'next/image'
import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/Reveal'

interface TargetCase {
    industryEn: string
    industryJp: string
    imageAlt: string
    pain: string
    scenario: string
    tags: string[]
    before: string
    after: string
}

// 画像パスはコード側で固定管理（i18n対象外）
const caseImages = [
    '/images/hero/pixta_105426077_L.jpg',
    '/images/hero/pixta_127341411_L.jpg',
    '/images/hero/pixta_116516966_L.jpg',
]

export default async function Target() {
    const t = await getTranslations('target')
    const cases = t.raw('cases') as TargetCase[]

    return (
        <section className="target" id="target">
            <div className="target-bg-grid"></div>

            <div className="target-container">
                <Reveal>
                    <div className="target-label">{t('label')}</div>
                </Reveal>
                <Reveal>
                    <h2 className="target-headline">
                        {t('headlineLine1')}<br/>{t('headlineLine2')}
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="target-lead">
                        {t('leadLine1')}<br/>
                        {t('leadLine2')}
                    </p>
                </Reveal>

                <div className="target-grid">
                    {cases.map((c, idx) => (
                        <Reveal key={c.industryEn}>
                            <div className="target-card">
                                <div className="target-card-image">
                                    <Image
                                        src={caseImages[idx]}
                                        alt={c.imageAlt}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 33vw"
                                        style={{objectFit: 'cover'}}
                                    />
                                    <div className="target-card-industry">{c.industryEn}</div>
                                    <div className="target-card-name">{c.industryJp}</div>
                                </div>
                                <div className="target-card-pain">{c.pain}</div>
                                <div className="target-card-scenario">
                                    <div className="target-card-scenario-label">{t('scenarioLabel')}</div>
                                    <p className="target-card-scenario-text">{c.scenario}</p>
                                    <div className="target-card-tags">
                                        {c.tags.map((tag) => (
                                            <span key={tag} className="target-card-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="target-card-results">
                                    <div className="target-card-result">
                                        <div className="target-card-result-label">{t('beforeLabel')}</div>
                                        <div className="target-card-result-value">{c.before}</div>
                                    </div>
                                    <div className="target-card-arrow">→</div>
                                    <div className="target-card-result after">
                                        <div className="target-card-result-label">{t('afterLabel')}</div>
                                        <div className="target-card-result-value">{c.after}</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <p className="target-bridge">
                        {t('bridgeLine1')}<br/>
                        {t('bridgeLine2Before')}<span className="em">{t('bridgeLine2Em')}</span>{t('bridgeLine2After')}
                    </p>
                </Reveal>

                <Reveal>
                    <div className="target-cases-note">
                        <strong>{t('noteEm')}</strong>
                        {t('noteRest')}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
