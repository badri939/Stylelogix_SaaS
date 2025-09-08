import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Stylelogix</h1>
        <p className="mb-6">Stylelogix leverages AI to provide smart product recommendations for fashion brands and garment resellers, helping you boost sales and delight your customers.</p>
      </main>
      <Footer />
    </div>
  );
}
