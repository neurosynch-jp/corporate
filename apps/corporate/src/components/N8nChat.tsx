'use client';

import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

export default function N8nChat() {
    useEffect(() => {
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL;

        if (!webhookUrl) {
            console.warn('NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL is not set');
            return;
        }

        createChat({
            webhookUrl,
            mode: 'window',
            showWelcomeScreen: false,
            defaultLanguage: 'en',
            initialMessages: [
                'こんにちは!Neurosynch のAI秘書アシスタントです。',
                'ご質問やご相談がありましたら、お気軽にどうぞ。',
            ],
            i18n: {
                en: {
                    title: 'Neurosynch AI Assistant',
                    subtitle: 'お気軽にご質問ください',
                    footer: '',
                    getStarted: 'チャットを開始',
                    inputPlaceholder: 'メッセージを入力...',
                    closeButtonTooltip: '閉じる',
                },
            },
        });
    }, []);

    return null;
}