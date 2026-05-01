'use client';

import {useEffect, useRef, useState, ReactNode} from 'react';

interface RevealProps {
    children: ReactNode;
    className?: string;
}

/**
 * IntersectionObserver でスクロール時のフェードイン演出を行う
 * 既存のReveal.tsxがあればそちらを使い、このファイルは不要
 */
export default function Reveal({children, className = ''}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {threshold: 0.15}
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()}>
            {children}
        </div>
    );
}
