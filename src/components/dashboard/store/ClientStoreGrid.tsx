'use client';

import { useState } from 'react';
import { mockClientStores, ClientStore } from '@/data/mockClientStores';
import { ClientStoreCard } from './ClientStoreCard';
import { ClientStoreDetailModal } from './ClientStoreDetailModal';

export const ClientStoreGrid = () => {
    const [selectedStore, setSelectedStore] = useState<ClientStore | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStoreClick = (store: ClientStore) => {
        setSelectedStore(store);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedStore(null), 300);
    };

    const activeStores = mockClientStores.filter(s => s.status === 'Active').length;
    const totalOptimizations = mockClientStores.reduce((sum, s) => sum + s.metrics.optimizedProducts, 0);

    return (
        <div className="flex-1">
            {/* Header with Stats */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Connected Stores
                        </h1>
                        <p className="text-gray-600">
                            Manage your clients' e-commerce stores and AI automation
                        </p>
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Connect New Store
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl border border-gray-100 p-4">
                        <div className="text-sm text-gray-500 mb-1">Total Stores</div>
                        <div className="text-2xl font-bold text-gray-900">{mockClientStores.length}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-4">
                        <div className="text-sm text-gray-500 mb-1">Active Stores</div>
                        <div className="text-2xl font-bold text-green-600">{activeStores}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-4">
                        <div className="text-sm text-gray-500 mb-1">Total Optimizations</div>
                        <div className="text-2xl font-bold text-primary-600">{totalOptimizations.toLocaleString()}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-4">
                        <div className="text-sm text-gray-500 mb-1">Avg Conversion Rate</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {(mockClientStores.reduce((sum, s) => sum + s.metrics.conversionRate, 0) / mockClientStores.length).toFixed(1)}%
                        </div>
                    </div>
                </div>
            </div>

            {/* Store Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockClientStores.map((store) => (
                    <ClientStoreCard
                        key={store.id}
                        store={store}
                        onClick={() => handleStoreClick(store)}
                    />
                ))}
            </div>

            <ClientStoreDetailModal
                store={selectedStore}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};
