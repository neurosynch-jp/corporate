'use client';

import {useEffect, useRef} from 'react';

interface HeroProps {
    locale: string;
    eyebrow: string;
    scrollLabel: string;
}

export default function Hero({locale, eyebrow, scrollLabel}: HeroProps) {
    const scrollBtnRef = useRef<HTMLButtonElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const problemSection = document.getElementById('problem');
            problemSection?.scrollIntoView({behavior: 'smooth', block: 'start'});
        };

        const btn = scrollBtnRef.current;
        btn?.addEventListener('click', handleScroll);
        return () => btn?.removeEventListener('click', handleScroll);
    }, []);

    // モバイル: 動画を一時停止してデータ通信量・バッテリーを節約
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                video.pause();
            } else {
                video.play().catch(() => {
                    /* 自動再生がブロックされた場合は無視 */
                });
            }
        };
        handleChange(mediaQuery);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <>
            <section className="hero" id="hero">
                <div className="hero-video-wrap">
                    <video
                        ref={videoRef}
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/videos/hero-poster.jpg"
                        aria-hidden="true"
                    >
                        <source src="/videos/14471903_3840_2160_30fps.mp4" type="video/mp4"/>
                        {/* 将来的にWebM版を追加する場合はここに source を追加 */}
                        {/* <source src="/videos/hero-bg.webm" type="video/webm"/> */}
                    </video>

                    <div className="hero-video-overlay"></div>
                </div>

                <nav className="hero-nav">
                    <a href="/" className="hero-logo" aria-label="Neurosynch">
                        <svg viewBox="0 0 560 90" xmlns="http://www.w3.org/2000/svg">
                            <text
                                fontFamily="'Outfit', sans-serif"
                                fontWeight="700"
                                fontSize="85"
                                fill="currentColor"
                                x="0"
                                y="70"
                                letterSpacing="12"
                            >neurosynch
                            </text>
                        </svg>
                    </a>
                    <button className="hero-menu-btn" aria-label="Open menu">
                        <span></span>
                        <span></span>
                    </button>
                </nav>

                <div className="hero-content">
                    <div className="hero-eyebrow">{eyebrow}</div>
                    <h1 className="hero-copy">
                        {locale === 'ja' ? (
                            <>
                                <span className="hero-ai">AI</span>
                                <span className="hero-text">の力を</span>
                                <span className="hero-field">現場</span>
                                <span className="hero-text">に届ける</span>
                            </>
                        ) : (
                            <>
                                <span className="hero-ai">AI</span>
                                <span className="hero-text"> Power,</span>
                                <span className="hero-text"> Delivered to the </span>
                                <span className="hero-field">Field</span>
                                <span className="hero-text">.</span>
                            </>
                        )}
                    </h1>
                </div>

                <button
                    ref={scrollBtnRef}
                    className="hero-scroll"
                    aria-label="Scroll to next section"
                >
                    {scrollLabel}
                    <span className="hero-scroll-line"></span>
                </button>
            </section>

            <div className="hero-transition-band"></div>
        </>
    );
}
