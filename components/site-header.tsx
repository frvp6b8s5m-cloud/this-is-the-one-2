"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/origin", label: "PROJECT: ORIGIN", className: "origin-nav-link" },
  { href: "/soundmatch", label: "SoundMatch" },
  { href: "/tools", label: "Tools" },
  { href: "/installation", label: "Installation" },
  { href: "/studio", label: "Studio" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="BZaudio home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-word">BZ<span>audio</span></span>
        </Link>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"} id="primary-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={link.className} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Get a quote <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
