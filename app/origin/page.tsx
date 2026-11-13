import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, AudioLines, Cpu, Monitor, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "PROJECT: ORIGIN",
  description: "Where the next era of audio begins. The BZaudio platform is under development.",
};

const pillars = [
  {
    number: "01",
    icon: Monitor,
    title: "Desktop platform",
    description: "A connected software workspace for planning, managing, and shaping professional audio systems.",
    status: "FOUNDATION IN DEVELOPMENT",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Touchscreen controller",
    description: "A purpose-built control surface designed to make complex audio workflows clear and immediate.",
    status: "CONCEPT + WORKFLOW DESIGN",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Dedicated-device OS",
    description: "A focused operating environment that brings the platform and hardware together as one coherent system.",
    status: "ARCHITECTURE IN DEVELOPMENT",
  },
];

export default function OriginPage() {
  return (
    <div className="origin-page">
      <section className="origin-hero">
        <div className="origin-blueprint" aria-hidden="true">
          <div className="origin-blueprint-frame" />
          <div className="origin-blueprint-stage" />
          <div className="origin-blueprint-beam beam-one" />
          <div className="origin-blueprint-beam beam-two" />
          <div className="origin-blueprint-floor" />
          <span className="origin-coordinate coordinate-a">45° 31&apos; N / 122° 40&apos; W</span>
          <span className="origin-coordinate coordinate-b">SYSTEM STUDY / 001</span>
        </div>
        <div className="container origin-hero-inner">
          <div className="origin-kicker"><span className="origin-kicker-dot" /> BZAUDIO / ADVANCED SYSTEMS DIVISION</div>
          <p className="origin-project-label">PROJECT <span>:</span> ORIGIN</p>
          <h1>THE FUTURE OF LIVE AUDIO IS <em>UNDER DEVELOPMENT.</em></h1>
          <p className="origin-tagline">Where the next era of audio begins.</p>
          <div className="origin-hero-bottom">
            <span><i /> ACTIVE DEVELOPMENT / EARLY ARCHITECTURE</span>
            <a href="#project-file" className="origin-scroll">EXPLORE THE PROJECT <ArrowDownRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="origin-intro" id="project-file">
        <div className="container origin-intro-grid">
          <div>
            <div className="origin-section-index">PROJECT FILE / 001</div>
            <h2>One connected system.<br /><span>Built around the show.</span></h2>
          </div>
          <div className="origin-intro-copy">
            <p>PROJECT: ORIGIN is the long-term BZaudio vision: a unified audio ecosystem that brings software, a dedicated operating system, and purpose-built hardware together.</p>
            <p>It is being developed in stages, with real-world workflows and verified equipment behavior taking priority over big promises.</p>
            <details className="origin-access-panel">
              <summary><span>OPEN PROJECT BRIEF</span><ArrowUpRight size={16} /></summary>
              <div className="origin-brief-content">
                <span className="origin-brief-status">PUBLIC PROJECT OVERVIEW / NOT A SECURITY GATE</span>
                <h3>Bring people closer to music.</h3>
                <p>Technology should make live audio more capable without making it harder to use. ORIGIN is designed to connect system planning, show workflows, control, and hardware in one consistent experience.</p>
                <ul>
                  <li>One coherent workflow across desktop software and dedicated devices.</li>
                  <li>Practical tools for setup, signal flow, mixing, and system operation.</li>
                  <li>Compatibility verified against specific console models and firmware—not assumed across an entire brand.</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="origin-platform">
        <div className="container">
          <div className="origin-section-heading">
            <div><div className="origin-section-index">THE PLATFORM / THREE PILLARS</div><h2>Designed to work<br /><span>as one.</span></h2></div>
            <p>Not three disconnected products. Three parts of a single audio environment, developed in a sequence that allows each layer to be tested before the next depends on it.</p>
          </div>
          <div className="origin-pillar-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="origin-pillar" key={pillar.number}>
                  <div className="origin-pillar-top"><span>{pillar.number} / 03</span><Icon size={22} strokeWidth={1.5} /></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <div className="origin-pillar-status"><i /> {pillar.status}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="origin-compatibility">
        <div className="container origin-compatibility-grid">
          <div className="origin-compatibility-mark"><AudioLines size={42} strokeWidth={1.2} /><span>COMPATIBILITY<br />PROGRAM / 001</span></div>
          <div>
            <div className="origin-section-index">FIRST COMPATIBILITY PRIORITY</div>
            <h2>Built around real<br /><span>mixing workflows.</span></h2>
            <p>Allen &amp; Heath consoles are the first compatibility focus. Each supported model and workflow must be verified individually, including relevant firmware and connection requirements. No blanket compatibility claim is made.</p>
            <Link href="/tools" className="origin-inline-link">Explore current BZaudio tools <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="origin-footer-cta">
        <div className="container origin-footer-inner">
          <div><div className="origin-section-index">THE WORK STARTS HERE</div><h2>Better tools.<br /><span>Better connection.</span></h2></div>
          <Link href="/soundmatch" className="button button-primary">Explore BZaudio today <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
