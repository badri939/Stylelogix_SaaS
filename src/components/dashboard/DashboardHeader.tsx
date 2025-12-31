'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';

export const DashboardHeader = () => {
    const t = useTranslations('Dashboard');

    return (
        <header className="bg-white border-b border-gray-200 h-16 px-8 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">{t('header.title')}</h1>

            <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </div>
        </header>
    );
};
