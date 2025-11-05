"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="primary-header flex">
      <div>
        <img src="/shared/logo.svg" alt="space tourism logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle text-white"
        aria-controls="primary-navigation"
        onClick={toggleNav}
      >
        <span className="sr-only">Menu</span>
        {isMobileNavOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
      </button>
      <nav>
        <NavLinks isMobileNavOpen={isMobileNavOpen} />
      </nav>
    </header>
  );
};

const NavLinks = ({ isMobileNavOpen }: { isMobileNavOpen: boolean }) => {
  const currentPath = usePathname();

  const links = [
    { href: "/", span: "00", label: "Home" },
    { href: "/destination", span: "01", label: "Destination" },
    { href: "/crew", span: "02", label: "Crew" },
    { href: "/technology", span: "03", label: "Technology" },
  ];
  const linksClassName =
    "--font-barlow-condensed uppercase text-white letter-spacing-2";
  return (
    <ul
      id="primary-navigation"
      data-visible={isMobileNavOpen}
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
