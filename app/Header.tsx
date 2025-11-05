"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className="primary-header flex">
      <div>
        <img src="/shared/logo.svg" alt="space tourism logo" className="logo" />
      </div>
      <button className="mobile-nav-toggle" aria-controls="primary-navigation">
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <NavLinks />
      </nav>
    </header>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const linksClassName =
    "--font-barlow-condensed uppercase text-white letter-spacing-2";
  const links = [
    { href: "/", span: "00", label: "Home" },
    { href: "/destination", span: "01", label: "Destination" },
    { href: "/crew", span: "02", label: "Crew" },
    { href: "/technology", span: "03", label: "Technology" },
  ];
  return (
    <ul
      id="primary-navigation"
      data-visible="false"
      className="primary-navigation underline-indicators flex"
    >
      {links.map((link) => (
        <li
          className={classNames({
            active: link.href === currentPath,
          })}
          key={link.label}
        >
          <Link className={linksClassName} href={link.href}>
            <span aria-hidden="true">{link.span}</span>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
