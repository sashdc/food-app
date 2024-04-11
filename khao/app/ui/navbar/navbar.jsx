import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white" >
      <h1 className="text-2xl">Khao</h1>
      <ul className="flex space-x-8">
        <Link href="/">
          Home
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="/menu">
          Menu
        </Link>

      </ul>
    </nav>
  );
}