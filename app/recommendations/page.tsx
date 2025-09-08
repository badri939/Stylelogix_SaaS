import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">AI Product Recommendations</h1>
        <p className="mb-6">Get personalized product suggestions for your fashion brand or garment reselling business.</p>
        {/* Product recommendation UI will go here */}
        <div className="bg-white rounded shadow p-6 text-gray-500 text-center">
          (Product recommendations will appear here)
        </div>
      </main>
      <Footer />
    </div>
  );
}
