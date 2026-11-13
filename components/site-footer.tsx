import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Link href="/" className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-word">BZ<span>audio</span></span>
        </Link>
        <p>Professional audio. Clear plans. Better sound.</p>
        <Link href="/origin" className="back-top">PROJECT: ORIGIN ↗</Link>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BZaudio</span>
        <span>Equipment sourcing · System design · Tools · Installation</span>
        <Link href="/contact">Contact BZaudio</Link>
      </div>
    </footer>
  );
}
