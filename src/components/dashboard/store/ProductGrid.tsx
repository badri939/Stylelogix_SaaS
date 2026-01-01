'use client';

import { useState } from 'react';
import { mockProducts, Product } from '@/data/mockProducts';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

export const ProductGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300); // Clear after animation
    };

    return (
        <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Product Catalog
                    <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {mockProducts.length} Items
                    </span>
                </h1>

                <div className="flex gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm w-64"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => handleProductClick(product)}
                    />
                ))}
            </div>

            <ProductDetailModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};
