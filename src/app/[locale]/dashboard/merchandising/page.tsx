'use client';

export default function StoreManagementPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    AI-Powered Store Management
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Your intelligent backend automation dashboard. Manage your product catalog,
                    view AI-generated recommendations, and optimize your store&apos;s performance.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Coming Soon - Feature in Development</span>
                </div>
            </div>

            {/* Placeholder Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Product Catalog</h3>
                    <p className="text-sm text-gray-600">View and manage your entire product inventory with AI-powered insights</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Recommendations</h3>
                    <p className="text-sm text-gray-600">Get intelligent product suggestions and optimization tips</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                    <p className="text-sm text-gray-600">Track your store&apos;s performance and conversion metrics</p>
                </div>
            </div>
        </div>
    );
}
