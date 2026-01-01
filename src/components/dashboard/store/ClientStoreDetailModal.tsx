'use client';

import { ClientStore } from '@/data/mockClientStores';
import { useEffect } from 'react';

interface ClientStoreDetailModalProps {
    store: ClientStore | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ClientStoreDetailModal = ({ store, isOpen, onClose }: ClientStoreDetailModalProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !store) return null;

    const aiActivityLogs = [
        { id: 1, action: 'Optimized product titles for 45 items', time: '2 hours ago', impact: '+12% CTR' },
        { id: 2, action: 'Generated personalized recommendations for 234 users', time: '5 hours ago', impact: '+8% engagement' },
        { id: 3, action: 'Auto-adjusted pricing for seasonal items', time: '1 day ago', impact: '+15% conversion' },
        { id: 4, action: 'Reorganized product listing order', time: '2 days ago', impact: '+6% visibility' }
    ];

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{store.storeName}</h2>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                        {store.domain}
                                    </span>
                                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                                        {store.platform}
                                    </span>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${store.status === 'Active' ? 'bg-green-50 text-green-700' :
                                            store.status === 'Paused' ? 'bg-yellow-50 text-yellow-700' :
                                                'bg-red-50 text-red-700'
                                        }`}>
                                        {store.status}
                                    </span>
                                </div>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${store.aiAgentStatus === 'Running' ? 'bg-green-50 text-green-700' :
                                    store.aiAgentStatus === 'Idle' ? 'bg-gray-50 text-gray-600' :
                                        'bg-red-50 text-red-700'
                                }`}>
                                <div className={`w-2 h-2 rounded-full ${store.aiAgentStatus === 'Running' ? 'bg-green-500 animate-pulse' :
                                        store.aiAgentStatus === 'Idle' ? 'bg-gray-400' :
                                            'bg-red-500'
                                    }`} />
                                <span className="text-sm font-semibold">AI Agent: {store.aiAgentStatus}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            {/* Left Column: Metrics */}
                            <div className="col-span-1 space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Performance Metrics</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="text-xs text-gray-500 mb-1">Total Products</div>
                                            <div className="text-2xl font-bold text-gray-900">{store.metrics.totalProducts.toLocaleString()}</div>
                                        </div>
                                        <div className="bg-primary-50 rounded-lg p-4">
                                            <div className="text-xs text-primary-600 mb-1">AI Optimized</div>
                                            <div className="text-2xl font-bold text-primary-700">{store.metrics.optimizedProducts.toLocaleString()}</div>
                                            <div className="text-xs text-primary-600 mt-1">
                                                {Math.round((store.metrics.optimizedProducts / store.metrics.totalProducts) * 100)}% coverage
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="text-xs text-gray-500 mb-1">Recommendations</div>
                                            <div className="text-2xl font-bold text-gray-900">{store.metrics.recommendationsGenerated.toLocaleString()}</div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
                                            <div className="text-2xl font-bold text-green-600">{store.metrics.conversionRate}%</div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="text-xs text-gray-500 mb-1">Avg Engagement</div>
                                            <div className="text-2xl font-bold text-gray-900">{store.metrics.avgEngagement}/5</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Connection Info</h3>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="text-gray-500">Store ID:</span>
                                            <span className="ml-2 font-mono text-gray-900">{store.id}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Connected:</span>
                                            <span className="ml-2 text-gray-900">{store.connectedDate}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Last Sync:</span>
                                            <span className="ml-2 text-gray-900">{store.lastSync}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: AI Activity */}
                            <div className="col-span-2">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Recent AI Activity
                                </h3>
                                <div className="space-y-3 mb-6">
                                    {aiActivityLogs.map((log) => (
                                        <div key={log.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                                            <div className="flex items-start justify-between mb-2">
                                                <p className="font-medium text-gray-900 flex-1">{log.action}</p>
                                                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium whitespace-nowrap ml-2">
                                                    {log.impact}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500">{log.time}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Backend Integration Status */}
                                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Backend Integration
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/50 rounded-lg p-3">
                                            <div className="text-xs text-gray-600 mb-1">API Access</div>
                                            <div className="text-sm font-semibold text-green-600 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Connected
                                            </div>
                                        </div>
                                        <div className="bg-white/50 rounded-lg p-3">
                                            <div className="text-xs text-gray-600 mb-1">Webhook Status</div>
                                            <div className="text-sm font-semibold text-green-600 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Active
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                            <button className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                                Configure AI Settings
                            </button>
                            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                View Full Analytics
                            </button>
                            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                Manage Integration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
