'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { useState } from 'react'

export default function ContactForm() {
    const t = useTranslations('contact')
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        type: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        // 現時点はコンソール出力のみ（後でAPI Routeに接続）
        console.log('送信データ:', form)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setStatus('success')
    }

    if (status === 'success') {
        return (
            <div className="text-center py-20">
                <div className="
          w-16 h-16 rounded-full bg-[#e6f7f2]
          flex items-center justify-center
          text-[#00a87a] text-2xl mx-auto mb-6
        ">
                    ✓
                </div>
                <h2 className="font-outfit text-2xl font-bold text-[#0f1923] mb-3">
                    {t('form_success_title')}
                </h2>
                <p className="text-sm text-[#4a5568] font-light leading-loose">
                    {t('form_success_desc')}
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* 名前・会社名 */}
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs font-medium text-[#4a5568] mb-2">
                        {t('form_name')} <span className="text-[#00a87a]">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t('form_name_placeholder')}
                        className="
              w-full px-4 py-3 rounded border border-[#dde2ea]
              text-sm text-[#0f1923] placeholder:text-[#8896aa]
              bg-white focus:outline-none focus:border-[#00a87a]
              transition-colors
            "
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#4a5568] mb-2">
                        {t('form_company')}
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder={t('form_company_placeholder')}
                        className="
              w-full px-4 py-3 rounded border border-[#dde2ea]
              text-sm text-[#0f1923] placeholder:text-[#8896aa]
              bg-white focus:outline-none focus:border-[#00a87a]
              transition-colors
            "
                    />
                </div>
            </div>

            {/* メール */}
            <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-2">
                    {t('form_email')} <span className="text-[#00a87a]">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('form_email_placeholder')}
                    className="
            w-full px-4 py-3 rounded border border-[#dde2ea]
            text-sm text-[#0f1923] placeholder:text-[#8896aa]
            bg-white focus:outline-none focus:border-[#00a87a]
            transition-colors
          "
                />
            </div>

            {/* 種別 */}
            <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-2">
                    {t('form_type')} <span className="text-[#00a87a]">*</span>
                </label>
                <select
                    name="type"
                    required
                    value={form.type}
                    onChange={handleChange}
                    className="
            w-full px-4 py-3 rounded border border-[#dde2ea]
            text-sm text-[#0f1923]
            bg-white focus:outline-none focus:border-[#00a87a]
            transition-colors
          "
                >
                    <option value="">---</option>
                    <option value="recruitment">{t('form_type_recruitment')}</option>
                    <option value="press">{t('form_type_press')}</option>
                    <option value="partnership">{t('form_type_partnership')}</option>
                    <option value="other">{t('form_type_other')}</option>
                </select>
            </div>

            {/* 本文 */}
            <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-2">
                    {t('form_message')} <span className="text-[#00a87a]">*</span>
                </label>
                <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('form_message_placeholder')}
                    rows={6}
                    className="
            w-full px-4 py-3 rounded border border-[#dde2ea]
            text-sm text-[#0f1923] placeholder:text-[#8896aa]
            bg-white focus:outline-none focus:border-[#00a87a]
            transition-colors resize-none
          "
                />
            </div>

            {/* エラー */}
            {status === 'error' && (
                <p className="text-sm text-red-500">{t('form_error')}</p>
            )}

            {/* 送信ボタン */}
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="
          w-full py-3 rounded
          bg-[#00a87a] text-white
          font-outfit text-sm font-semibold
          hover:bg-[#007d5a] transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
        "
            >
                {status === 'submitting' ? t('form_submitting') : t('form_submit')}
            </button>

        </form>
    )
}