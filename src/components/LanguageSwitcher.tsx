'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
            <button
                onClick={() => switchLocale('en')}
                disabled={isPending}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-all ${
                    locale === 'en'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => switchLocale('de')}
                disabled={isPending}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-all ${
                    locale === 'de'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
                DE
            </button>
        </div>
    );
}
