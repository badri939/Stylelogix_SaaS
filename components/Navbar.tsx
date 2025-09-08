import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">Stylelogix</div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/services" className="hover:text-blue-600">AI Services</Link>
        <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
