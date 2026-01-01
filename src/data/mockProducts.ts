export interface Product {
    id: string;
    name: string;
    category: 'Men' | 'Women' | 'Accessories';
    price: number;
    stock: number;
    image: string;
    status: 'Active' | 'Draft' | 'Low Stock';
    aiScore: number; // 0-100 indicating listing quality
    lastOptimized: string;
}

export const mockProducts: Product[] = [
    {
        id: 'P-1001',
        name: 'Premium Wool Blend Coat',
        category: 'Women',
        price: 249.99,
        stock: 12,
        image: '/products/coat-1.jpg',
        status: 'Active',
        aiScore: 92,
        lastOptimized: '2 hours ago'
    },
    {
        id: 'P-1002',
        name: 'Classic Oxford Shirt',
        category: 'Men',
        price: 89.50,
        stock: 45,
        image: '/products/shirt-1.jpg',
        status: 'Active',
        aiScore: 88,
        lastOptimized: '1 day ago'
    },
    {
        id: 'P-1003',
        name: 'Leather Crossbody Bag',
        category: 'Accessories',
        price: 159.00,
        stock: 5,
        image: '/products/bag-1.jpg',
        status: 'Low Stock',
        aiScore: 74,
        lastOptimized: '3 days ago'
    },
    {
        id: 'P-1004',
        name: 'Slim Fit Denim Jeans',
        category: 'Men',
        price: 110.00,
        stock: 32,
        image: '/products/jeans-1.jpg',
        status: 'Active',
        aiScore: 65,
        lastOptimized: 'Never'
    },
    {
        id: 'P-1005',
        name: 'Silk Floral Midi Dress',
        category: 'Women',
        price: 180.00,
        stock: 18,
        image: '/products/dress-1.jpg',
        status: 'Draft',
        aiScore: 45,
        lastOptimized: 'Never'
    },
    {
        id: 'P-1006',
        name: 'Chunky Knit Sweater',
        category: 'Women',
        price: 120.00,
        stock: 8,
        image: '/products/sweater-1.jpg',
        status: 'Low Stock',
        aiScore: 82,
        lastOptimized: '5 hours ago'
    },
    {
        id: 'P-1007',
        name: 'Minimalist Leather Watch',
        category: 'Accessories',
        price: 220.00,
        stock: 50,
        image: '/products/watch-1.jpg',
        status: 'Active',
        aiScore: 95,
        lastOptimized: 'Just now'
    },
    {
        id: 'P-1008',
        name: 'Performance Running Shoes',
        category: 'Men',
        price: 145.00,
        stock: 22,
        image: '/products/shoes-1.jpg',
        status: 'Active',
        aiScore: 78,
        lastOptimized: '1 week ago'
    }
];
