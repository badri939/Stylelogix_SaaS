'use client';

import { Product } from '@/data/mockProducts';
import { useEffect } from 'react';

interface ProductDetailModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
    // Close on ESC key
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

    if (!isOpen || !product) return null;

    const aiRecommendations = [
        { id: 1, title: 'Optimize Product Title', impact: 'High', description: 'Add trending keywords like "Premium" and "Sustainable"' },
        { id: 2, title: 'Improve Image Quality', impact: 'Medium', description: 'Use lifestyle photos instead of plain backgrounds' },
        { id: 3, title: 'Adjust Pricing', impact: 'Low', description: 'Consider $10 price reduction based on competitor analysis' }
    ];

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Left: Product Image & Info */}
                        <div>
                            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                                <svg className="w-24 h-24 text-gray-400 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-sm text-gray-500">Product ID</span>
                                    <p className="font-mono text-sm text-gray-900">{product.id}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Category</span>
                                    <p className="font-medium text-gray-900">{product.category}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Stock Level</span>
                                    <p className="font-medium text-gray-900">{product.stock} units</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Last Optimized</span>
                                    <p className="font-medium text-gray-900">{product.lastOptimized}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Details & AI Recommendations */}
                        <div className="flex flex-col">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl font-bold text-primary-600">${product.price.toFixed(2)}</span>
                                    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${product.status === 'Active' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                                            product.status === 'Draft' ? 'bg-gray-50 text-gray-600 ring-gray-500/10' :
                                                'bg-orange-50 text-orange-700 ring-orange-600/20'
                                        }`}>
                                        {product.status}
                                    </span>
                                </div>

                                {/* AI Score */}
                                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-gray-700">AI Health Score</span>
                                        <span className={`text-2xl font-bold ${product.aiScore >= 80 ? 'text-green-600' :
                                                product.aiScore >= 50 ? 'text-yellow-600' :
                                                    'text-red-600'
                                            }`}>
                                            {product.aiScore}/100
                                        </span>
                                    </div>
                                    <div className="w-full bg-white/50 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full transition-all ${product.aiScore >= 80 ? 'bg-green-500' :
                                                    product.aiScore >= 50 ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                }`}
                                            style={{ width: `${product.aiScore}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* AI Recommendations */}
                            <div className="flex-1 overflow-y-auto">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    AI Recommendations
                                </h3>
                                <div className="space-y-3">
                                    {aiRecommendations.map((rec) => (
                                        <div key={rec.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-medium text-gray-900">{rec.title}</h4>
                                                <span className={`text-xs px-2 py-1 rounded-full ${rec.impact === 'High' ? 'bg-red-100 text-red-700' :
                                                        rec.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {rec.impact} Impact
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{rec.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                                <button className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                                    Apply All Optimizations
                                </button>
                                <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                    Edit Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
