import { Product } from '@/data/mockProducts';

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
    // Determine status badge color
    const statusColor = {
        'Active': 'bg-green-50 text-green-700 ring-green-600/20',
        'Draft': 'bg-gray-50 text-gray-600 ring-gray-500/10',
        'Low Stock': 'bg-orange-50 text-orange-700 ring-orange-600/20'
    }[product.status];

    return (
        <div
            onClick={onClick}
            className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer hover:border-primary-200"
        >
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                {/* Placeholder Image using Color Block */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500`}>
                    <svg className="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>

                {/* AI Score Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm border border-white/50 flex items-center gap-1">
                    <span className={`${product.aiScore >= 80 ? 'text-green-600' : product.aiScore >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        AI Score: {product.aiScore}
                    </span>
                </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusColor} mb-2`}>
                            {product.status}
                        </span>
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                    </div>
                </div>

                <div className="text-sm text-gray-500 mb-4 line-clamp-1">
                    {product.category} • {product.stock} in stock
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                        Optimize
                    </button>
                </div>
            </div>
        </div>
    );
};
