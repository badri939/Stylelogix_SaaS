import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">Have questions or want to learn more? Reach out to our team and we’ll get back to you soon.</p>
        <form className="max-w-md mx-auto bg-white rounded shadow p-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
