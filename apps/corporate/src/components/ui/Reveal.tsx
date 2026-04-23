'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type RevealProps = {
    children: ReactNode
    className?: string
    delay?: number   // ms単位の遅延（複数要素を順番にアニメーションさせるとき）
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={ref}
            className={`
        transition-all duration-700 ease-out
        ${visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }
        ${className}
      `}
        >
            {children}
        </div>
    )
}