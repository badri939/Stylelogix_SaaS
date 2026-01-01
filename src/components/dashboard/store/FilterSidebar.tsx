import { Button } from '@/components/ui/Button';

export const FilterSidebar = () => {
    return (
        <div className="w-64 flex-shrink-0 space-y-8">
            {/* Category Filter */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                    Categories
                </h3>
                <div className="space-y-3">
                    {['All Products', 'Men', 'Women', 'Accessories'].map((category, i) => (
                        <label key={category} className="flex items-center group cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                defaultChecked={i === 0}
                                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500 transition-colors"
                            />
                            <span className="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Status Filter */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                    Status
                </h3>
                <div className="space-y-3">
                    {['Active', 'Draft', 'Low Stock'].map((status) => (
                        <label key={status} className="flex items-center group cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 transition-colors"
                            />
                            <span className="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                                {status}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range (Visual Only) */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                    Price Range
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-primary-600 h-2 rounded-full w-2/3"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$500+</span>
                </div>
            </div>

            <Button variant="outline" size="sm" className="w-full">
                Reset Filters
            </Button>
        </div>
    );
};
