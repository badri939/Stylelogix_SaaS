'use client';

import { useTranslations } from 'next-intl';

export default function DashboardPage() {
    const t = useTranslations('Dashboard.overview');

    const stats = [
        { label: t('stats.total_products'), value: '1,284', change: '+12%', color: 'bg-primary-50 text-primary-600' },
        { label: t('stats.optimized'), value: '845', change: '+5%', color: 'bg-green-50 text-green-600' },
        { label: t('stats.pending'), value: '439', change: '-2%', color: 'bg-orange-50 text-orange-600' },
        { label: t('stats.sales_lift'), value: '$45.2k', change: '+18%', color: 'bg-purple-50 text-purple-600' },
    ];

    return (
        <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg ${stat.color}`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                            </div>
                            <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900">{t('recent_activity')}</h2>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-100" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Product Analysis #{1000 + item}</p>
                                    <p className="text-xs text-gray-500">Completed 2 hours ago</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                                Optimized
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
