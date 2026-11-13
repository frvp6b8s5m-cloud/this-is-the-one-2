import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, AudioLines, FileLock2, FileText, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "PROJECT: ORIGIN",
  description: "A BZaudio initiative. Further information is currently restricted.",
  robots: { index: false, follow: false },
};

const archiveFiles = [
  { id: "001", title: "INITIAL RECORD", classification: "PARTIALLY WITHHELD", note: "The opening record is available. The contents are not." },
  { id: "002", title: "PROJECT BRIEF", classification: "RESTRICTED", note: "Additional information has not been cleared for public release." },
  { id: "003", title: "FUTURE DIRECTIVE", classification: "SEALED", note: "This file remains closed until further notice." },
];

export default function OriginPage() {
  return (
    <div className="origin-page">
      <section className="origin-hero">
        <div className="origin-grid-overlay" aria-hidden="true" />
        <div className="container origin-hero-inner">
          <div className="origin-topline">
            <span className="origin-kicker"><i /> BZAUDIO / INTERNAL ARCHIVE</span>
            <span className="origin-stamp"><ShieldAlert size={13} /> TOP SECRET</span>
          </div>
          <div className="origin-hero-copy">
            <p className="origin-file-label">SPECIAL INITIATIVE <span>/</span> FILE 001</p>
            <h1>PROJECT<span>:</span><br />ORIGIN</h1>
            <p className="origin-headline">THE FUTURE IS <em>UNDER DEVELOPMENT.</em></p>
            <p className="origin-lede">Something significant is taking shape inside BZaudio. The full picture remains undisclosed. For now.</p>
            <a className="origin-scroll-link" href="#archive">ENTER THE ARCHIVE <ArrowDownRight size={16} /></a>
          </div>
          <div className="origin-status-panel">
            <div className="origin-status-head"><span>PROJECT STATUS</span><span className="origin-live-dot">● ACTIVE</span></div>
            <strong>UNDER DEVELOPMENT</strong>
            <div className="origin-status-rule"><i /></div>
            <div className="origin-status-foot"><span>PUBLIC INFORMATION</span><b>LIMITED</b></div>
          </div>
          <div className="origin-hero-footer"><span>DOCUMENT 001 / BZAUDIO</span><span>FURTHER DETAILS WITHHELD</span><span>ACCESS: RESTRICTED</span></div>
        </div>
      </section>

      <section className="origin-archive" id="archive">
        <div className="container">
          <div className="origin-archive-heading">
            <div>
              <p className="origin-section-kicker">BZAUDIO / RECORDS DIVISION</p>
              <h2>THE ORIGIN <span>ARCHIVE.</span></h2>
            </div>
            <p>Some records have been made visible. Their contents are another matter.</p>
          </div>
          <div className="origin-file-grid">
            {archiveFiles.map((file) => (
              <article className="origin-file" key={file.id}>
                <div className="origin-file-top"><span>FILE / {file.id}</span><FileText size={19} /></div>
                <h3>{file.title}</h3>
                <div className="origin-redaction-bars" aria-hidden="true"><i /><i /><i /></div>
                <div className="origin-file-bottom"><span>{file.classification}</span><FileLock2 size={15} /></div>
                <details className="origin-file-details">
                  <summary>REQUEST FILE <ArrowUpRight size={14} /></summary>
                  <p>{file.note}</p>
                  <span>NO FURTHER PUBLIC CONTENT</span>
                </details>
              </article>
            ))}
          </div>
          <p className="origin-archive-note"><ShieldAlert size={14} /> These are public-facing project records. Restricted labels are part of the presentation, not a security system.</p>
        </div>
      </section>

      <section className="origin-final">
        <div className="container origin-final-inner">
          <div>
            <p className="origin-section-kicker">END OF PUBLIC RECORD</p>
            <h2>YOU HAVE ONLY<br /><span>SEEN THE BEGINNING.</span></h2>
            <p>More will be revealed when the time is right.</p>
          </div>
          <Link href="/" className="origin-return-link">RETURN TO BZAUDIO <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
