import { ClientStore } from '@/data/mockClientStores';

interface ClientStoreCardProps {
    store: ClientStore;
    onClick: () => void;
}

export const ClientStoreCard = ({ store, onClick }: ClientStoreCardProps) => {
    const statusColor = {
        'Active': 'bg-green-50 text-green-700 ring-green-600/20',
        'Paused': 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
        'Setup Required': 'bg-red-50 text-red-700 ring-red-600/20'
    }[store.status];

    const agentStatusColor = {
        'Running': 'bg-green-500',
        'Idle': 'bg-gray-400',
        'Error': 'bg-red-500'
    }[store.aiAgentStatus];

    const optimizationPercentage = store.metrics.totalProducts > 0
        ? Math.round((store.metrics.optimizedProducts / store.metrics.totalProducts) * 100)
        : 0;

    return (
        <div
            onClick={onClick}
            className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer hover:border-primary-200 p-6"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
                            {store.storeName}
                        </h3>
                        <div className={`w-2 h-2 rounded-full ${agentStatusColor} animate-pulse`} title={`AI Agent: ${store.aiAgentStatus}`} />
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        {store.domain}
                    </p>
                </div>
                <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusColor}`}>
                    {store.status}
                </span>
            </div>

            {/* Platform Badge */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-medium">
                    {store.platform}
                </span>
                <span className="text-xs text-gray-500">
                    Connected {store.connectedDate}
                </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Products</div>
                    <div className="text-lg font-bold text-gray-900">{store.metrics.totalProducts.toLocaleString()}</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-3">
                    <div className="text-xs text-primary-600 mb-1">Optimized</div>
                    <div className="text-lg font-bold text-primary-700">{optimizationPercentage}%</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">AI Recommendations</div>
                    <div className="text-lg font-bold text-gray-900">{store.metrics.recommendationsGenerated.toLocaleString()}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
                    <div className="text-lg font-bold text-gray-900">{store.metrics.conversionRate}%</div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="text-xs text-gray-500">
                    Last sync: {store.lastSync}
                </span>
                <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                    View Details →
                </button>
            </div>
        </div>
    );
};
