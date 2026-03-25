import Link from "next/link";

export default function Footer() {
  return (

    <footer className="container mx-auto px-4 flex justify-between items-center p-5 text-[palevioletred]">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <ul className="grid grid-cols-3 list-none">
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
    
  );
}