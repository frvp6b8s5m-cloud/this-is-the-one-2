import Link from "next/link";
import {
  ArrowUpRight, AudioLines, GraduationCap, Monitor, Settings2,
  SlidersHorizontal, Speaker, Wrench,
} from "lucide-react";
import { categories, plannedBrands } from "@/lib/catalog";

const services = [
  { number: "01", icon: Speaker, title: "Equipment sourcing", text: "Find the right speakers, consoles, microphones, processing, and accessories for the job.", href: "/shop", action: "Explore equipment" },
  { number: "02", icon: AudioLines, title: "System design", text: "Turn your room, audience, use case, and budget into a clear, practical system plan.", href: "/soundmatch", action: "Build with SoundMatch" },
  { number: "03", icon: Wrench, title: "Installation & setup", text: "Plan the signal path, connections, configuration, and handoff—not just the equipment list.", href: "/installation", action: "Explore installation" },
  { number: "04", icon: SlidersHorizontal, title: "Live audio tools", text: "Use browser-based calculators and utilities built around real-world audio workflows.", href: "/tools", action: "Open audio tools" },
  { number: "05", icon: Monitor, title: "Studio & workflow", text: "Shape a workspace around the way you plan, prepare, and work with audio.", href: "/studio", action: "Explore the studio" },
  { number: "06", icon: GraduationCap, title: "Support & training", text: "Get practical guidance that helps teams understand their equipment and use it well.", href: "/contact", action: "Talk with BZaudio" },
];

export default function HomePage() {
  return (
    <div className="legacy-home">
      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Professional live audio mixing equipment in a production environment" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> PROFESSIONAL AUDIO / SYSTEMS / SUPPORT <span className="hero-live">● BUILT AROUND THE SHOW</span></p>
          <h1>Make every<br /><span>signal count.</span></h1>
          <p className="hero-copy">Professional audio equipment, thoughtful system planning, and practical tools for the people who make every show, service, and event sound its best.</p>
          <div className="hero-actions">
            <Link href="/soundmatch" className="button button-primary">Build your system <ArrowUpRight size={17} /></Link>
            <Link href="/shop" className="text-link">Explore equipment <span>↗</span></Link>
          </div>
          <div className="hero-proof"><span className="proof-dot" /><span>Clear recommendations</span><i /><span>Verified product details</span><i /><span>Real-world workflows</span></div>
        </div>
        <aside className="hero-spec" aria-label="The BZaudio approach">
          <span className="spec-kicker">THE BZAUDIO APPROACH</span>
          <strong>Good audio starts with a good plan.</strong>
          <span className="spec-line" />
          <div><span>01</span> CHOOSE THE RIGHT GEAR</div>
          <div><span>02</span> PLAN THE WHOLE SYSTEM</div>
          <div><span>03</span> MAKE IT WORK IN THE ROOM</div>
          <span className="spec-mark">BZ<span>/</span>01</span>
        </aside>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>PRO AUDIO / 2026</span></div>
      </section>

      <section className="intro section-pad">
        <div className="container intro-grid">
          <p className="eyebrow section-label">Audio with purpose</p>
          <div>
            <h2>Great sound is more than great gear.</h2>
            <p className="intro-copy">The right system brings equipment, people, and the space together. BZaudio helps make those decisions clearer—from choosing individual products to planning a complete live sound setup and getting it ready for the room.</p>
          </div>
        </div>
      </section>

      <div className="signal-strip" aria-label="BZaudio services">
        <div className="container signal-track">
          <span>PROFESSIONAL AUDIO</span><i>✳</i><span>SYSTEM DESIGN</span><i>✳</i><span>EQUIPMENT SOURCING</span><i>✳</i><span>LIVE SOUND TOOLS</span><i>✳</i><span>INSTALLATION & SUPPORT</span>
        </div>
      </div>

      <section className="services section-pad" id="services">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">How BZaudio can help</p><h2>One place for the whole signal chain.</h2></div>
            <p className="heading-note">From the first equipment question to the final system check, keep the decisions connected.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text, href, action }) => (
              <article className="service-card" key={number}>
                <div className="service-number">{number} / BZAUDIO</div>
                <div className="service-icon"><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href} className="card-link">{action} <span>↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature" id="soundmatch">
        <div className="feature-photo" role="img" aria-label="Live sound production desk and equipment" />
        <div className="feature-content">
          <p className="eyebrow">The BZaudio difference</p>
          <h2>Meet your system<br />before you buy it.</h2>
          <p>SoundMatch turns your venue, audience, budget, priorities, and existing equipment into three clear planning paths—so you can understand the system before making decisions.</p>
          <ul className="feature-list">
            <li><span>01</span> Essential, Recommended & Professional plans</li>
            <li><span>02</span> Understand the role of every system component</li>
            <li><span>03</span> Know what still needs a technician to verify</li>
          </ul>
          <Link href="/soundmatch" className="button button-outline">Explore SoundMatch <ArrowUpRight size={17} /></Link>
          <p className="small-note">A guided planning tool—not a substitute for final acoustic or engineering review.</p>
        </div>
      </section>

      <section className="catalog-section section-pad" id="catalog">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">BZaudio equipment</p><h2>Build the system<br />piece by piece.</h2></div>
            <p className="heading-note">Browse by equipment role. Product availability, pricing, and supplier relationships are confirmed individually before quoting.</p>
          </div>
          <div className="catalog-grid">
            {categories.map((category) => (
              <article className="product-card" key={category.slug}>
                <div className="product-image"><span className="product-placeholder">{category.icon} / BZ AUDIO</span></div>
                <div className="product-copy">
                  <span className="product-category">EQUIPMENT CATEGORY / {category.icon}</span>
                  <h3 className="product-name">{category.title}</h3>
                  <p className="product-description">{category.description}</p>
                  <div className="product-action"><Link href="/shop">Explore category <span>↗</span></Link></div>
                </div>
              </article>
            ))}
          </div>
          <p className="catalog-footnote">Looking for something specific? <Link href="/contact">Tell us what you need</Link>.</p>
        </div>
      </section>

      <section className="approach section-pad">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">A straightforward process</p><h2>Clear steps. Better decisions.</h2></div>
            <p className="heading-note">A practical path from the first question to a system that is ready to work.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Tell us</h3><p>Share your venue, audience, existing equipment, goals, and budget.</p></article>
            <article><span>02</span><h3>Get guidance</h3><p>Review options with clear explanations and realistic trade-offs.</p></article>
            <article><span>03</span><h3>Make a plan</h3><p>Confirm equipment roles, sourcing, signal flow, and what needs testing.</p></article>
            <article><span>04</span><h3>Move forward</h3><p>Coordinate the agreed next steps, setup, and practical handoff.</p></article>
          </div>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="container about-grid">
          <div className="about-stamp">
            <span className="stamp-top">BZ AUDIO / EST. 2026</span>
            <div className="stamp-wave"><span /><span /><span /><span /><span /><span /><span /></div>
            <span className="stamp-bottom">CLEAR · CAPABLE · CONNECTED</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">The BZaudio standard</p>
            <h2>Built for the people<br /><span>behind the sound.</span></h2>
            <p>We believe professional audio should be capable without being needlessly complicated. That means useful tools, honest equipment information, practical system planning, and support that respects the people doing the work.</p>
            <p>Our manufacturer ecosystem is multi-brand by design. Compatibility and product details are checked at the model level rather than assumed.</p>
            <div className="brand-list">
              {plannedBrands.slice(0, 6).map((brand, index) => <div key={brand}><span>0{index + 1}</span>{brand}<ArrowUpRight size={15} /></div>)}
            </div>
            <p className="small-note">Manufacturer names are examples of the ecosystem BZaudio intends to source from—not claims of current stock or authorization.</p>
          </div>
        </div>
      </section>

      <section className="origin-teaser">
        <div className="container origin-teaser-inner">
          <div>
            <span className="origin-teaser-stamp"><i /> PROJECT FILE / 001 — PUBLIC BRIEF</span>
            <p className="eyebrow">BZaudio / Advanced Systems Division</p>
            <h2>PROJECT: ORIGIN<br /><span>The next era starts here.</span></h2>
          </div>
          <div>
            <p className="origin-teaser-copy">THE FUTURE OF LIVE AUDIO IS UNDER DEVELOPMENT. A connected ecosystem bringing desktop software, a dedicated-device operating system, and purpose-built touchscreen control together—built in stages and verified against real equipment.</p>
            <Link href="/origin" className="button button-primary">Enter Project ORIGIN <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="contact section-pad">
        <div className="container contact-grid">
          <div className="contact-heading">
            <p className="eyebrow">Let's get started</p>
            <h2>What are you<br />working on?</h2>
            <p>Equipment sourcing, a new system, an upgrade, or a workflow question. Tell us what you are trying to accomplish and we can help map the next step.</p>
          </div>
          <div className="contact-heading">
            <p className="eyebrow">Start with a clear plan</p>
            <h2>Let's make<br />it happen.</h2>
            <Link href="/contact" className="button button-primary">Contact BZaudio <ArrowUpRight size={17} /></Link>
            <p className="small-note">No fake inventory or checkout. Product details and quotes are confirmed with you before purchase.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
