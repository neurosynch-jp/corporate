'use client'

import { useEffect, useRef, useState } from 'react'

type UseRevealOptions = {
    threshold?: number
    rootMargin?: string
}

export function useReveal(options: UseRevealOptions = {}) {
    const ref = useRef<HTMLElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(el)
                }
            },
            {
                threshold: options.threshold ?? 0.1,
                rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
            }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin])

    return { ref, visible }
}