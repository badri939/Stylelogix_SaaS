



import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <section className="relative w-full aspect-[16/7] min-h-[400px] flex items-center justify-center overflow-hidden mb-8">
          <Image
            src="/hero.png"
            alt="Fashion AI Hero"
            fill
            className="object-contain w-full h-full bg-black"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </section>
        <section className="w-full px-4 py-10 bg-gradient-to-b from-red-100 to-red-50 -mt-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-red-900 drop-shadow">AI Solutions for Fashion Retailers</h1>
          <p className="text-blue-800 text-lg text-center max-w-2xl mb-6">
            Unlock the power of artificial intelligence to grow your fashion or garment business. Stylelogix delivers seamless, scalable AI-driven solutions to help you boost sales, engage customers, and stay ahead of the competition.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
            <a href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition text-lg font-semibold text-center">
              Get Started
            </a>
            <a href="/about" className="bg-white text-blue-700 border border-blue-600 px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition text-lg font-semibold text-center">
              Learn More
            </a>
          </div>
          <p className="text-blue-800 text-sm text-center max-w-2xl">
            Easy API integration. No credit card required to start.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
