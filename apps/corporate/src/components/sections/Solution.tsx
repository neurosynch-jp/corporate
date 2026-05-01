import {getTranslations} from 'next-intl/server'
import Reveal from '@/components/Reveal'

interface FlowStep {
    num: string
    title: string
    desc: string
    meta: string
}

// アイコンSVGはコード側で固定管理（i18n対象外）
const flowIcons = [
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12a9 9 0 1 1-6.2-8.55"/>
            <polyline points="21 4 21 12 13 12"/>
        </svg>
    ),
]

export default async function Solution() {
    const t = await getTranslations('solution')
    const flowSteps = t.raw('flowSteps') as FlowStep[]
    const includes = t.raw('pricing.includes') as string[]

    return (
        <section className="solution" id="solution">
            <div className="solution-container">
                <Reveal>
                    <div className="section-label">{t('label')}</div>
                </Reveal>
                <Reveal>
                    <h2 className="solution-headline">
                        {t('headlineBefore')}<span className="em">{t('headlineEm')}</span>{t('headlineAfter')}<br/>
                        {t('headlineLine2')}
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="solution-lead">
                        {t('leadLine1')}<br/>
                        {t('leadLine2')}
                    </p>
                </Reveal>

                <Reveal>
                    <div className="flow-wrapper">
                        <div className="flow-label">{t('flowLabel')}</div>
                        <h3 className="flow-title">{t('flowTitle')}</h3>

                        <div className="flow-steps">
                            {flowSteps.map((step, idx) => (
                                <div key={step.num} className="flow-step">
                                    <div className="flow-step-num">{step.num}</div>
                                    <div className="flow-step-icon">{flowIcons[idx]}</div>
                                    <h4 className="flow-step-title">{step.title}</h4>
                                    <p className="flow-step-desc">{step.desc}</p>
                                    <div className="flow-step-meta">{step.meta}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="pricing-block">
                        <div className="pricing-left">
                            <div className="pricing-eyebrow">{t('pricing.eyebrow')}</div>
                            <div className="pricing-original">{t('pricing.original')}</div>
                            <div className="pricing-amount">
                                <span className="pricing-prefix">{t('pricing.prefix')}</span>
                                <span className="pricing-number">{t('pricing.number')}</span>
                                <span className="pricing-suffix">{t('pricing.suffix')}</span>
                                <span className="pricing-tilde">{t('pricing.tilde')}</span>
                            </div>
                            <p className="pricing-note">
                                <strong>{t('pricing.noteEm')}</strong>{t('pricing.noteRest1')}<br/>
                                {t('pricing.noteRest2')}
                            </p>
                        </div>

                        <div className="pricing-right">
                            <h4>{t('pricing.includesTitle')}</h4>
                            <ul className="pricing-includes">
                                {includes.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <a href="/contact" className="pricing-cta">{t('pricing.cta')}</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
