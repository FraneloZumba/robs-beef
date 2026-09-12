"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "593995953577";
const INSTAGRAM_URL = "https://instagram.com/robs.beef";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Av.+Yaupi+y+Benjamin+Franklin,+Cuenca,+Ecuador";

const NAV = [
  ["Inicio", "#inicio"],
  ["Burgers", "#burgers"],
  ["Rob's Classic", "#classic"],
  ["Nosotros", "#nosotros"],
  ["Pedidos", "#pedidos"],
] as const;

const BURGERS = [
  { num: "01", name: "ROB'S CLASSIC", desc: "Carne smash, cheddar, tocino, mermelada de tocino y salsa de la casa.", image: "/classic.jpg", tag: "THE ORIGINAL" },
  { num: "02", name: "PHILY", desc: "Mozzarella, pimientos rojos asados, queso crema y todo el beef.", image: "/phily.jpg", tag: "CREAMY / SMOKY" },
  { num: "03", name: "BROOKLYN", desc: "Mozzarella, aceite de oliva, orégano y bacon crispy.", image: "/brooklyn.jpg", tag: "NYC ENERGY" },
];

const wa = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function SafeImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [error, setError] = useState(false);
  if (error) return <div className="img-fallback" role="img" aria-label={alt}><span>ROB&apos;S<br/>BEEF</span></div>;
  return <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 760px) 100vw, 50vw" onError={() => setError(true)} />;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShow(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShow(true); obs.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${show ? "show" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Page() {
  const [menu, setMenu] = useState(false);

  return <>
    <header className="nav">
      <div className="shell nav-inner">
        <a className="brand" href="#inicio">
          <span className="brand-mark"><SafeImage src="/logo.png" alt="Logo Rob's Beef" /></span>
          <span className="brand-word">ROB&apos;S <b>BEEF</b></span>
        </a>
        <nav className="desktop-nav">{NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="nav-order" href={wa("Hola Rob's Beef, quiero hacer un pedido")}>PEDIR AHORA ↗</a>
        <button className="burger-btn" onClick={() => setMenu(v => !v)} aria-label="Abrir menú" aria-expanded={menu}><span/><span/></button>
      </div>
      <div className={`mobile-nav ${menu ? "open" : ""}`}>
        {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}
        <a href={wa("Hola Rob's Beef, quiero hacer un pedido")}>PEDIR AHORA ↗</a>
      </div>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <Reveal><p className="kicker">SMASH BURGERS · CUENCA</p></Reveal>
          <Reveal delay={80}><h1 className="hero-title">ROB&apos;S<span>BEEF.</span></h1></Reveal>
          <Reveal delay={150}><p className="hero-sub">Smash burgers de <b>carne real</b> para amantes de la buena burger.</p></Reveal>
          <Reveal delay={210} className="hero-actions">
            <a className="btn btn-coral" href={wa("Hola Rob's Beef, quiero pedir una burger")}>QUIERO UNA BURGER ↗</a>
            <a className="btn btn-ghost" href="#burgers">VER BURGERS</a>
          </Reveal>
          <Reveal delay={280}><div className="hero-meta"><span>DARK KITCHEN</span><i/><span>DELIVERY OR PICK UP</span></div></Reveal>
        </div>
        <div className="hero-visual">
          <div className="hero-orange-block"/>
          <div className="hero-photo"><SafeImage src="/hero-burger.jpg" alt="Smash burger Rob's Beef" priority /></div>
          <div className="hero-sticker">BEEF<br/>FIRST.</div>
          <div className="hero-smallcopy">PIDE · DISFRUTA · REPITE</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">{Array.from({length:2}).map((_, i) => <span key={i}>SMASH · BEEF · BACON · CHEESE · ROB&apos;S · SMASH · BEEF · BACON · CHEESE · ROB&apos;S · </span>)}</div></div>

      <section className="section cream">
        <div className="shell intro-grid">
          <Reveal><p className="kicker ink">FOR BURGER PEOPLE</p><h2 className="display intro-title">PARA AMANTES<span>DE LA BUENA</span>BURGER.</h2></Reveal>
          <Reveal delay={120} className="intro-copy">
            <p>Sin poses. Sin vueltas. Una smash burger empieza por una buena carne, una plancha caliente y suficiente queso para que valga la pena ensuciarse las manos.</p>
            <div className="intro-rule"/><p className="mini">ROB&apos;S BEEF · CUENCA<br/>DELIVERY / PICK UP</p>
          </Reveal>
        </div>
        <div className="shell image-strip">
          <Reveal className="strip-main"><SafeImage src="/lifestyle-1.jpg" alt="Burger Rob's Beef" /></Reveal>
          <Reveal delay={80} className="strip-side"><SafeImage src="/lifestyle-2.jpg" alt="Cliente disfrutando Rob's Beef" /></Reveal>
          <Reveal delay={140} className="strip-side"><SafeImage src="/lifestyle-3.jpg" alt="Equipo Rob's Beef" /></Reveal>
        </div>
      </section>

      <section className="section classic" id="classic">
        <div className="shell classic-grid">
          <div>
            <Reveal><p className="kicker light">THE ONE</p><h2 className="display classic-title">ROB&apos;S<span>CLASSIC.</span></h2></Reveal>
            <Reveal delay={100}><p className="classic-desc">La burger que resume la casa: carne smash, cheddar, tocino, mermelada de tocino y salsa de la casa.</p></Reveal>
            <Reveal delay={160}><div className="ingredient-list">{["PAN DE PAPA","QUESO CHEDDAR","CARNE SMASH","TOCINO","MERMELADA DE TOCINO","SALSA DE LA CASA"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b></div>)}</div></Reveal>
          </div>
          <Reveal delay={120} className="classic-photo"><SafeImage src="/classic-hero.jpg" alt="Rob's Classic" /><div className="photo-tag">REAL BEEF<br/>REAL GOOD.</div></Reveal>
        </div>
      </section>

      <section className="section cream" id="burgers">
        <div className="shell">
          <Reveal className="section-heading"><div><p className="kicker ink">THE LINEUP</p><h2 className="display burgers-title">PICK<br/>YOUR BEEF.</h2></div><p>Tres nombres. Tres personalidades. La misma regla: que la burger llegue a la mesa —o a tu puerta— con ganas de repetir.</p></Reveal>
          <div className="burger-list">
            {BURGERS.map((b,i)=><Reveal key={b.name} delay={i*70} className="burger-row">
              <div className="burger-num">{b.num}</div>
              <div className="burger-thumb"><SafeImage src={b.image} alt={b.name}/></div>
              <div className="burger-name-wrap"><span>{b.tag}</span><h3>{b.name}</h3></div>
              <p>{b.desc}</p>
              <a href={wa(`Hola Rob's Beef, quiero pedir la ${b.name}`)} aria-label={`Pedir ${b.name}`}>↗</a>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image"><SafeImage src="/smash-closeup.jpg" alt="Close up de smash burger" /></div>
        <div className="manifesto-copy"><Reveal><p className="kicker light">NO APOLOGIES</p><h2 className="display">SMASHED.<span>NOT SORRY.</span></h2><p>Bordes tostados, queso derritiéndose y el tipo de burger que no necesita explicación.</p></Reveal></div>
      </section>

      <section className="section cream" id="nosotros">
        <div className="shell">
          <Reveal><p className="kicker ink">ROB&apos;S PEOPLE</p><h2 className="display people-title">GOOD BEEF.<span>GOOD PEOPLE.</span></h2></Reveal>
          <div className="people-grid">
            <Reveal className="people-photo big"><SafeImage src="/people-1.jpg" alt="Equipo Rob's Beef" /></Reveal>
            <Reveal delay={80} className="people-photo"><SafeImage src="/people-2.jpg" alt="Cliente Rob's Beef" /></Reveal>
            <Reveal delay={150} className="people-quote"><p>“Perdón si mi lenguaje de amor arruina tu dieta.”</p><span>— ROB&apos;S BEEF</span></Reveal>
            <Reveal delay={200} className="people-photo"><SafeImage src="/people-3.jpg" alt="Rob's Beef en evento" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section order" id="pedidos">
        <div className="shell order-grid">
          <Reveal><p className="kicker light">FROM OUR KITCHEN TO YOUR DOOR</p><h2 className="display order-title">DE NUESTRA<span>COCINA</span>A TU PUERTA.</h2></Reveal>
          <Reveal delay={120} className="order-info">
            {[ ["01","ELIGE TU BURGER","Revisa el menú y encuentra tu favorita."], ["02","ESCRÍBENOS","Haz tu pedido directo por WhatsApp."], ["03","DELIVERY OR PICK UP","Recíbela o pasa por ella. Fácil."] ].map(([n,t,c]) => <div className="order-line" key={n}><span>{n}</span><div><b>{t}</b><p>{c}</p></div></div>)}
            <a className="big-order" href={wa("Hola Rob's Beef, quiero hacer un pedido")}>PEDIR POR WHATSAPP <span>↗</span></a>
          </Reveal>
        </div>
      </section>

      <section className="location cream">
        <div className="shell location-grid">
          <Reveal><p className="kicker ink">FIND THE BEEF</p><h2 className="display">CUENCA.<br/>ECUADOR.</h2></Reveal>
          <Reveal delay={100} className="location-info">
            <div><b>UBICACIÓN</b><p>Av. Yaupi y Benjamín Franklin<br/>Sector Colinas de Cullca</p></div>
            <div><b>INSTAGRAM</b><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@robs.beef ↗</a></div>
            <div className="location-buttons"><a className="btn btn-black" href={MAP_URL} target="_blank" rel="noreferrer">CÓMO LLEGAR ↗</a><a className="btn btn-outline-black" href={wa("Hola Rob's Beef, quisiera información")}>WHATSAPP</a></div>
          </Reveal>
        </div>
      </section>
    </main>

    <footer>
      <div className="shell footer-top"><div className="footer-logo">ROB&apos;S <span>BEEF</span></div><div className="footer-links"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href={wa("Hola Rob's Beef")}>WHATSAPP ↗</a><a href={MAP_URL} target="_blank" rel="noreferrer">UBICACIÓN ↗</a></div></div>
      <div className="shell footer-bottom"><span>© 2026 ROB&apos;S BEEF</span><span>SMASH BURGER · CUENCA</span><span>PIDE · DISFRUTA · REPITE</span></div>
    </footer>
  </>;
}
