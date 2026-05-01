'use client';

import {useEffect, useRef} from 'react';

interface HeroProps {
    eyebrow: string;
    headline1: string;
    headline2: string;
    scrollLabel: string;
}

export default function Hero({eyebrow, headline1, headline2, scrollLabel}: HeroProps) {
    const scrollBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const problemSection = document.getElementById('problem');
            problemSection?.scrollIntoView({behavior: 'smooth', block: 'start'});
        };

        const btn = scrollBtnRef.current;
        btn?.addEventListener('click', handleScroll);
        return () => btn?.removeEventListener('click', handleScroll);
    }, []);

    return (
        <>
            <section className="hero" id="hero">
                <div className="hero-glow glow-1"></div>
                <div className="hero-glow glow-2"></div>

                <div className="hero-3d-scene">
                    <div className="geo-layer geo-layer-1">
                        <svg viewBox="-400 -400 800 800" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" stroke="rgba(0, 168, 122, 0.35)" strokeWidth="1">
                                <polygon className="geo-pulse"
                                         points="350,0 175,303 -175,303 -350,0 -175,-303 175,-303"/>
                                <polygon className="geo-pulse"
                                         points="303,175 0,350 -303,175 -303,-175 0,-350 303,-175"
                                         stroke="rgba(255, 255, 255, 0.15)"/>
                                <polygon className="geo-pulse" points="0,-300 260,150 -260,150"
                                         stroke="rgba(0, 168, 122, 0.25)"/>
                                <polygon className="geo-pulse" points="0,300 260,-150 -260,-150"
                                         stroke="rgba(255, 255, 255, 0.12)"/>
                            </g>
                            <g fill="rgba(0, 168, 122, 0.6)">
                                <circle cx="350" cy="0" r="3"/>
                                <circle cx="175" cy="303" r="3"/>
                                <circle cx="-175" cy="303" r="3"/>
                                <circle cx="-350" cy="0" r="3"/>
                                <circle cx="-175" cy="-303" r="3"/>
                                <circle cx="175" cy="-303" r="3"/>
                            </g>
                        </svg>
                    </div>

                    <div className="geo-layer geo-layer-2">
                        <svg viewBox="-550 -550 1100 1100" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none">
                                <circle className="geo-pulse" cx="0" cy="0" r="500"
                                        stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1"/>
                                <circle className="geo-pulse" cx="0" cy="0" r="420"
                                        stroke="rgba(0, 168, 122, 0.2)" strokeWidth="1" strokeDasharray="2 6"/>
                                <circle className="geo-pulse" cx="0" cy="0" r="340"
                                        stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1"/>
                            </g>
                            <g fill="rgba(0, 168, 122, 0.7)">
                                <circle cx="500" cy="0" r="4"/>
                                <circle cx="-420" cy="0" r="3"/>
                                <circle cx="0" cy="340" r="3"/>
                            </g>
                        </svg>
                    </div>

                    <div className="geo-layer geo-layer-3">
                        <svg viewBox="-300 -300 600 600" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" stroke="rgba(0, 168, 122, 0.3)" strokeWidth="1.5">
                                <polygon className="geo-pulse"
                                         points="0,-250 65,-65 250,0 65,65 0,250 -65,65 -250,0 -65,-65"/>
                                <polygon className="geo-pulse" points="120,0 60,104 -60,104 -120,0 -60,-104 60,-104"
                                         stroke="rgba(255, 255, 255, 0.2)"/>
                            </g>
                            <g stroke="rgba(0, 168, 122, 0.15)" strokeWidth="0.5">
                                <line x1="0" y1="-250" x2="0" y2="-120"/>
                                <line x1="250" y1="0" x2="120" y2="0"/>
                                <line x1="0" y1="250" x2="0" y2="120"/>
                                <line x1="-250" y1="0" x2="-120" y2="0"/>
                            </g>
                        </svg>
                    </div>

                    <div className="geo-layer geo-layer-4">
                        <svg viewBox="-700 -700 1400 1400" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none">
                                <circle cx="0" cy="0" r="650"
                                        stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="1 8"/>
                                <circle cx="0" cy="0" r="580"
                                        stroke="rgba(0, 168, 122, 0.1)" strokeWidth="0.5" strokeDasharray="3 12"/>
                            </g>
                            <g fill="rgba(255, 255, 255, 0.4)">
                                <circle cx="650" cy="0" r="2"/>
                                <circle cx="-460" cy="460" r="2"/>
                                <circle cx="0" cy="-650" r="2"/>
                                <circle cx="460" cy="-460" r="2"/>
                            </g>
                        </svg>
                    </div>
                </div>

                <svg className="hero-canvas" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice"
                     xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#00a87a" stopOpacity="1"/>
                            <stop offset="100%" stopColor="#00a87a" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="nodeGradWhite" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                    <g stroke="rgba(0, 168, 122, 0.25)" strokeWidth="1" fill="none">
                        <line className="flow-line" x1="200" y1="200" x2="600" y2="350"/>
                        <line className="flow-line" x1="600" y1="350" x2="950" y2="200"/>
                        <line className="flow-line" x1="950" y1="200" x2="1400" y2="380"/>
                        <line className="flow-line" x1="1400" y1="380" x2="1700" y2="250"/>
                        <line className="flow-line" x1="200" y1="200" x2="450" y2="650"/>
                        <line className="flow-line" x1="450" y1="650" x2="800" y2="800"/>
                        <line className="flow-line" x1="800" y1="800" x2="1200" y2="700"/>
                        <line className="flow-line" x1="1200" y1="700" x2="1600" y2="850"/>
                        <line className="flow-line" x1="600" y1="350" x2="800" y2="800"/>
                        <line className="flow-line" x1="950" y1="200" x2="1200" y2="700"/>
                        <line className="flow-line" x1="1400" y1="380" x2="1600" y2="850"/>
                        <line className="flow-line" x1="450" y1="650" x2="200" y2="900"/>
                    </g>
                    <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.5" fill="none">
                        <line x1="200" y1="200" x2="950" y2="200"/>
                        <line x1="600" y1="350" x2="1400" y2="380"/>
                        <line x1="450" y1="650" x2="1200" y2="700"/>
                        <line x1="800" y1="800" x2="1600" y2="850"/>
                    </g>
                    <g>
                        <circle className="node-pulse" cx="200" cy="200" r="4" fill="url(#nodeGrad)"/>
                        <circle className="node-pulse" cx="600" cy="350" r="6" fill="url(#nodeGradWhite)"/>
                        <circle className="node-pulse" cx="950" cy="200" r="5" fill="url(#nodeGrad)"/>
                        <circle className="node-pulse" cx="1400" cy="380" r="4" fill="url(#nodeGradWhite)"/>
                        <circle className="node-pulse" cx="1700" cy="250" r="5" fill="url(#nodeGrad)"/>
                        <circle className="node-pulse" cx="450" cy="650" r="5" fill="url(#nodeGradWhite)"/>
                        <circle className="node-pulse" cx="800" cy="800" r="6" fill="url(#nodeGrad)"/>
                        <circle className="node-pulse" cx="1200" cy="700" r="4" fill="url(#nodeGradWhite)"/>
                        <circle className="node-pulse" cx="1600" cy="850" r="5" fill="url(#nodeGrad)"/>
                        <circle className="node-pulse" cx="200" cy="900" r="4" fill="url(#nodeGradWhite)"/>
                    </g>
                    <g fill="rgba(255, 255, 255, 0.2)">
                        <circle cx="350" cy="450" r="1.5"/>
                        <circle cx="1100" cy="500" r="1.5"/>
                        <circle cx="1500" cy="600" r="1.5"/>
                        <circle cx="700" cy="550" r="1.5"/>
                        <circle cx="1300" cy="900" r="1.5"/>
                        <circle cx="500" cy="850" r="1.5"/>
                    </g>
                </svg>

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
                        {headline1}<span className="accent-mark">{headline2}</span>
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
