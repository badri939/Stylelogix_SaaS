import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CardDeck } from "@/components/CardDeck";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CardDeck />
      </main>
      <Footer />
    </div>
  );
}
