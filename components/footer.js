import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
    <footer className="flex justify-between items-center p-5 text-pink-400">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <ul className="flex space-x-4 list-none">
        <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Adoption</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Cat care</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Contact</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Privacy Policy</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Service</Link></li>
        <li><Link href="#" className="hover:text-pink-600">About</Link></li>
        <li><Link href="#" className="hover:text-pink-600">Support</Link></li>
      </ul>
    </footer>
    </div>
  );
}