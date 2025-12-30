'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            // Replace the current locale in the pathname
            // Since we don't have the full path easily without complex logic in client component,
            // a simple redirect or using next-intl's Link/usePathname is better.
            // But for now, we'll assume the path structure is /[locale]/... 
            // This is a naive implementation; with next-intl navigation APIs it's cleaner.
            // Let's use window.location for simplicity if we don't refactor everything to use next-intl navigation yet.
            // actually, to be proper, we should use `usePathname` from `next-intl/navigation`.
            // I will implement standard next-intl navigation in a separate file if needed, but for now:

            const path = window.location.pathname;
            const segments = path.split('/');
            segments[1] = nextLocale;
            const newPath = segments.join('/');
            router.replace(newPath);
        });
    };

    return (
        <div className="relative">
            <select
                defaultValue={locale}
                onChange={onSelectChange}
                disabled={isPending}
                className="appearance-none bg-transparent py-1 pl-2 pr-6 border border-gray-300 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="en">🇺🇸 EN</option>
                <option value="de">🇩🇪 DE</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
