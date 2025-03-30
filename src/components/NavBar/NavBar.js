import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import LanguageSwitch from "../../components/NavBar/LanguageSwitch";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { translations } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { id: "home", href: "/", label: translations["navbar.home"] },
  ];

  return (
    <header>
      <nav
        className="flex w-full h-[7.18rem] md:h-[13.12rem] justify-between items-center px-8 py-6 gap-2 z-50"
        aria-label="Main Navigation"
      >
        <Link href="/" data-testid="navbar-brand" aria-label="Go to home">
          <img
            src="/images/donna-vino-logo-transparent.png"
            alt="Donna Vino Logo Navbar - a brand for wine tastings and experiences"
            className="w-[6.25rem] h-[4.31rem] md:w-[7.75rem] md:h-[5.37rem]"
          />
        </Link>
        <div
          id="desktop-menu"
          role="menu"
          className="flex items-center space-x-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-md px-3 py-2 text-titleMedium ${
                pathname === link.href
                  ? "font-bold underline"
                  : "opacity-70 hover:opacity-100"
              }`}
              data-testid={`nav-link-${link.id}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-[5.12rem] h-[2.87rem]">
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
