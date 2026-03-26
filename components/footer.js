import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[palevioletred] mt-10">
    <footer className="container mx-auto px-4 flex justify-between items-center p-5 text-white">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 list-none gap-4">
        <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
        <li><Link href="/adopt" className="hover:text-pink-600">Adopt</Link></li>
        <li><Link href="/catCare" className="hover:text-pink-600">Cat care</Link></li>
        <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Privacy</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Service</Link></li>
        <li><Link href="#" className="hover:text-pink-600">About</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Support</Link></li>
      </ul>
    </footer>
    </div>
    
  );
}