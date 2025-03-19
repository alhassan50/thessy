import React from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className={`py-4`}>
      <div className={`flex gap-12 items-center justify-between px-[5%]`}>
        <Link href={`/`}>
          <h2 className="font-medium">Thessy Fashion</h2>
        </Link>
        <nav>
          <ul className={`flex gap-6 items-center justify-center`}>
            {links.map((link) => (
              <li key={link.href} className={`hover:underline font-medium`}>
                <Link href={link.href}>{link.name}</Link>{" "}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
