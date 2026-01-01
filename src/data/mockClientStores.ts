export interface ClientStore {
    id: string;
    storeName: string;
    domain: string;
    platform: 'Shopify' | 'WooCommerce' | 'Magento' | 'Custom';
    status: 'Active' | 'Paused' | 'Setup Required';
    connectedDate: string;
    aiAgentStatus: 'Running' | 'Idle' | 'Error';
    metrics: {
        totalProducts: number;
        optimizedProducts: number;
        recommendationsGenerated: number;
        conversionRate: number;
        avgEngagement: number;
    };
    lastSync: string;
}

export const mockClientStores: ClientStore[] = [
    {
        id: 'CS-1001',
        storeName: 'Elegant Fashion Boutique',
        domain: 'elegantfashion.com',
        platform: 'Shopify',
        status: 'Active',
        connectedDate: '2024-11-15',
        aiAgentStatus: 'Running',
        metrics: {
            totalProducts: 1284,
            optimizedProducts: 845,
            recommendationsGenerated: 3420,
            conversionRate: 3.8,
            avgEngagement: 4.2
        },
        lastSync: '2 minutes ago'
    },
    {
        id: 'CS-1002',
        storeName: 'Urban Streetwear Co.',
        domain: 'urbanstreetwear.shop',
        platform: 'WooCommerce',
        status: 'Active',
        connectedDate: '2024-12-01',
        aiAgentStatus: 'Running',
        metrics: {
            totalProducts: 892,
            optimizedProducts: 654,
            recommendationsGenerated: 2180,
            conversionRate: 4.1,
            avgEngagement: 3.9
        },
        lastSync: '5 minutes ago'
    },
    {
        id: 'CS-1003',
        storeName: 'Luxury Accessories Hub',
        domain: 'luxuryaccessories.io',
        platform: 'Magento',
        status: 'Paused',
        connectedDate: '2024-10-20',
        aiAgentStatus: 'Idle',
        metrics: {
            totalProducts: 456,
            optimizedProducts: 234,
            recommendationsGenerated: 980,
            conversionRate: 2.9,
            avgEngagement: 3.2
        },
        lastSync: '2 hours ago'
    },
    {
        id: 'CS-1004',
        storeName: 'Athleisure Pro',
        domain: 'athleisure-pro.com',
        platform: 'Shopify',
        status: 'Setup Required',
        connectedDate: '2025-01-01',
        aiAgentStatus: 'Error',
        metrics: {
            totalProducts: 0,
            optimizedProducts: 0,
            recommendationsGenerated: 0,
            conversionRate: 0,
            avgEngagement: 0
        },
        lastSync: 'Never'
    }
];
