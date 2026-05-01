'use client'

import {useEffect, useRef, useState} from 'react'

interface CountUpNumberProps {
    /** 目標数値（文字列で受け取る。例: "79"） */
    target: string
    /** アニメーション時間（ミリ秒）。デフォルト2000ms */
    duration?: number
    /** カウント開始のしきい値（0-1）。デフォルト0.3 */
    threshold?: number
}

/**
 * スクロールで画面に入ったとき、0から目標値までカウントアップする数字
 * 一度発火したら再スクロールでは再カウントしない
 * prefers-reduced-motion: reduce のユーザーには即時表示
 */
export default function CountUpNumber({
                                          target,
                                          duration = 2000,
                                          threshold = 0.3,
                                      }: CountUpNumberProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const [displayValue, setDisplayValue] = useState<number>(0)
    const hasAnimatedRef = useRef(false)

    // 文字列からの数値変換（"79" → 79）。失敗時は0扱い
    const targetNumber = parseInt(target, 10) || 0

    useEffect(() => {
        // モーション低減設定への配慮
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            setDisplayValue(targetNumber)
            hasAnimatedRef.current = true
            return
        }

        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimatedRef.current) {
                        hasAnimatedRef.current = true
                        startCountUp()
                        observer.disconnect()
                    }
                })
            },
            {threshold}
        )

        observer.observe(node)
        return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetNumber, threshold])

    const startCountUp = () => {
        const startTime = performance.now()

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // easeOutQuart: 最初に速く、終盤でゆっくり
            const eased = 1 - Math.pow(1 - progress, 4)
            const current = Math.round(targetNumber * eased)

            setDisplayValue(current)

            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                // 最終値を確実にセット
                setDisplayValue(targetNumber)
            }
        }

        requestAnimationFrame(animate)
    }

    return (
        <span ref={ref} className="count-up-number">
            {displayValue}
        </span>
    )
}
