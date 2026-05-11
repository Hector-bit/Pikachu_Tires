"use client";
import { useState, useEffect } from "react";

const services = [
  { icon: "⚖️", title: "Balanceo de Llantas", desc: "Balanceo de precisión para una conducción suave y prolongar la vida útil de sus llantas." },
  { icon: "🔄", title: "Cambio de Llantas", desc: "Instalación rápida y segura de llantas nuevas o de temporada en cualquier vehículo." },
  { icon: "🔧", title: "Reparación de Pinchazos", desc: "Reparación profesional de pinchazos y fugas de aire para volver al camino rápido." },
  { icon: "🔩", title: "Alineación de Dirección", desc: "Alineación computarizada para mayor control, seguridad y ahorro de combustible." },
  { icon: "💨", title: "Inflado con Nitrógeno", desc: "Llenado con nitrógeno puro para una presión más estable y mayor vida útil de la llanta." },
  { icon: "🚗", title: "Inspección Gratuita", desc: "Revisión completa del estado de sus llantas sin costo, porque su seguridad es primero." },
];

// Pikachu palette:
// Yellow:      #FFD700  (main body)
// Deep yellow: #F5A800  (shading/stripes)
// Brown:       #8B4513  (eyes, nose)
// Red:         #CC0000  (cheek circles)
// Black:       #1A1A1A  (outlines, ears tips)
// Cream/white: #FFFDE7  (belly, background)

const C = {
  yellow:   "#FFD700",
  deepYel:  "#F5A800",
  brown:    "#8B4513",
  red:      "#CC0000",
  black:    "#1A1A1A",
  cream:    "#FFFDE7",
  darkYel:  "#E6A800",
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: C.cream, color: C.black, overflowX: "hidden", fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled ? C.yellow : "transparent",
        borderBottom: scrolled ? `3px solid ${C.black}` : "none",
        boxShadow: scrolled ? `0 4px 0 ${C.black}` : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", border: `3px solid ${C.black}`, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🛞</div>
            <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, letterSpacing: 2, color: C.black }}>
              Alejandro&apos;s Tire Repair
            </span>
          </div>
          <div className="hidden md:flex" style={{ gap: 32, fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.black }}>
            {["inicio","servicios","nosotros","contacto"].map(s => (
              <a key={s} href={`#${s}`} style={{ textDecoration: "none", color: C.black, paddingBottom: 3, borderBottom: `2px solid transparent`, transition: "border-color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.borderColor = C.red}
                onMouseOut={e => e.currentTarget.style.borderColor = "transparent"}
              >{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ display: "block", width: "100%", height: 3, backgroundColor: C.black, borderRadius: 2, transition: "all 0.2s",
                  transform: menuOpen ? (i===0 ? "rotate(45deg) translate(5px,5px)" : i===2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none",
                  opacity: menuOpen && i===1 ? 0 : 1
                }} />
              ))}
            </div>
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: C.black, padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: 16, borderTop: `3px solid ${C.yellow}` }}>
            {["inicio","servicios","nosotros","contacto"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)} style={{ color: C.yellow, textDecoration: "none", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", fontSize: 14 }}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", backgroundColor: C.yellow }}>
        {/* Pikachu ear tip accent shapes */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 0, height: 0, borderRight: "120px solid transparent", borderTop: `120px solid ${C.black}`, opacity: 0.9 }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderLeft: "120px solid transparent", borderTop: `120px solid ${C.black}`, opacity: 0.9 }} />

        {/* Decorative rings */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          {[640, 500, 360, 220].map((size, i) => (
            <div key={size} style={{
              position: "absolute", borderRadius: "50%",
              border: `${i % 2 === 0 ? 3 : 2}px solid`,
              borderColor: i % 2 === 0 ? `rgba(26,26,26,0.12)` : `rgba(245,168,0,0.5)`,
              width: size, height: size,
              animation: `spin ${18 + i * 7}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`
            }} />
          ))}
        </div>

        {/* Dot pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `radial-gradient(circle, ${C.black} 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }} />

        {/* Pikachu cheek circles */}
        <div style={{ position: "absolute", bottom: "15%", left: "8%", width: 100, height: 80, borderRadius: "50%", background: C.red, opacity: 0.7 }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 100, height: 80, borderRadius: "50%", background: C.red, opacity: 0.7 }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem", maxWidth: 900, margin: "0 auto", animation: "slideUp 0.8s ease forwards" }}>
          <div style={{
            display: "inline-block", background: C.black, color: C.yellow,
            fontFamily: "'Bebas Neue', cursive", fontSize: 13, letterSpacing: "0.3em",
            padding: "8px 24px", marginBottom: 28, borderRadius: 2,
          }}>
            · Servicio Profesional de Llantas · Bellingham, WA ·
          </div>

          <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(5rem,14vw,10rem)", lineHeight: 0.9, margin: "0 0 1rem", color: C.black }}>
            <span style={{ display: "block" }}>Alejandro&apos;s</span>
            <span style={{ display: "block", color: C.cream, WebkitTextStroke: `3px ${C.black}`, textShadow: `5px 5px 0 ${C.black}` }}>
              Tire Repair
            </span>
          </h1>

          <p style={{ color: C.black, fontSize: "1.1rem", maxWidth: 480, margin: "1.5rem auto 2.5rem", lineHeight: 1.6, fontWeight: 600, opacity: 0.8 }}>
            Expertos en llantas con años de experiencia. Rápido, confiable y al mejor precio de Bellingham.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <a href="#servicios" style={{
              padding: "16px 36px", background: C.black, color: C.yellow,
              fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 3,
              textDecoration: "none", borderRadius: 2, border: `3px solid ${C.black}`,
              boxShadow: `5px 5px 0 ${C.deepYel}`, transition: "all 0.15s", display: "inline-block",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = `7px 7px 0 ${C.deepYel}`; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `5px 5px 0 ${C.deepYel}`; }}
            >Ver Servicios</a>
            <a href="#contacto" style={{
              padding: "16px 36px", background: C.red, color: C.cream,
              fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 3,
              textDecoration: "none", borderRadius: 2, border: `3px solid ${C.black}`,
              boxShadow: `5px 5px 0 ${C.black}`, transition: "all 0.15s", display: "inline-block",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = `7px 7px 0 ${C.black}`; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `5px 5px 0 ${C.black}`; }}
            >Contáctenos</a>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <div style={{ background: C.black, padding: "14px 0", overflow: "hidden", borderTop: `3px solid ${C.yellow}`, borderBottom: `3px solid ${C.yellow}` }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 25s linear infinite" }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} style={{ marginRight: 64, fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: "0.25em", color: C.yellow }}>
              ⚡ BALANCEO &nbsp;·&nbsp; CAMBIO DE LLANTAS &nbsp;·&nbsp; REPARACIÓN &nbsp;·&nbsp; ALINEACIÓN &nbsp;·&nbsp; NITRÓGENO &nbsp;·&nbsp; INSPECCIÓN GRATIS
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="servicios" style={{ padding: "7rem 1.5rem", maxWidth: 1200, margin: "0 auto", background: C.cream }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: C.yellow, color: C.black, fontFamily: "'Bebas Neue', cursive", fontSize: 12, letterSpacing: "0.35em", padding: "6px 20px", marginBottom: 16, border: `2px solid ${C.black}`, borderRadius: 2 }}>
            LO QUE OFRECEMOS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem,6vw,4.5rem)", margin: 0, color: C.black }}>
            Nuestros Servicios
          </h2>
          {/* Pikachu tail zigzag accent */}
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 4 }}>
            {["⚡","⚡","⚡"].map((z, i) => <span key={i} style={{ color: C.deepYel, fontSize: 18 }}>{z}</span>)}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {services.map((s, i) => {
            const dark = i % 3 === 1;
            return (
              <div key={i} style={{
                background: dark ? C.black : C.yellow,
                color: dark ? C.yellow : C.black,
                border: `3px solid ${C.black}`,
                borderRadius: 4,
                padding: "2.5rem",
                transition: "all 0.2s",
                boxShadow: `5px 5px 0 ${C.deepYel}`,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `8px 8px 0 ${C.deepYel}`; }}
                onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `5px 5px 0 ${C.deepYel}`; }}
              >
                {/* cheek dot accent */}
                <div style={{ position: "absolute", top: 12, right: 12, width: 28, height: 22, borderRadius: "50%", background: C.red, opacity: 0.6 }} />
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 24, letterSpacing: 1, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.85 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section id="nosotros" style={{ background: C.deepYel, padding: "7rem 1.5rem", position: "relative", overflow: "hidden", borderTop: `3px solid ${C.black}`, borderBottom: `3px solid ${C.black}` }}>
        {/* Back stripe like Pikachu's back stripes */}
        <div style={{ position: "absolute", top: 0, left: "30%", width: "8%", height: "100%", background: "rgba(139,69,19,0.15)", transform: "skewX(-8deg)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", width: "6%", height: "100%", background: "rgba(139,69,19,0.12)", transform: "skewX(-8deg)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-responsive">
          <div>
            <div style={{ display: "inline-block", background: C.black, color: C.yellow, fontFamily: "'Bebas Neue', cursive", fontSize: 12, letterSpacing: "0.35em", padding: "6px 20px", marginBottom: 24, borderRadius: 2 }}>
              ¿POR QUÉ ELEGIRNOS?
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3rem,7vw,5rem)", color: C.black, margin: "0 0 1.5rem", lineHeight: 1 }}>
              Calidad<br /><span style={{ color: C.cream, WebkitTextStroke: `2px ${C.black}` }}>y Confianza</span>
            </h2>
            <p style={{ color: C.black, lineHeight: 1.8, marginBottom: 16, fontSize: 15, opacity: 0.85 }}>
              En <strong>Alejandro&apos;s Tire Repair</strong>, tratamos cada vehículo como si fuera el nuestro. Contamos con técnicos experimentados y equipos modernos para garantizar su seguridad.
            </p>
            <p style={{ color: C.black, lineHeight: 1.8, marginBottom: 48, fontSize: 15, opacity: 0.85 }}>
              Precios justos, tiempos de espera mínimos y resultados que hablan por sí solos.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[["10+", "Años de experiencia"], ["5,000+", "Clientes felices"], ["100%", "Garantía"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center", border: `3px solid ${C.black}`, padding: "20px 12px", borderRadius: 4, background: C.cream, boxShadow: `3px 3px 0 ${C.black}` }}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 36, color: C.red, lineHeight: 1 }}>{num}</div>
                  <div style={{ color: C.black, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6, fontWeight: 600 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: "100%", maxWidth: 400, aspectRatio: "1",
              border: `3px solid ${C.black}`,
              background: C.yellow,
              borderRadius: 4,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              position: "relative",
              boxShadow: `8px 8px 0 ${C.black}`
            }}>
              {/* red cheek circles */}
              <div style={{ position: "absolute", bottom: "22%", left: "10%", width: 60, height: 48, borderRadius: "50%", background: C.red, opacity: 0.8 }} />
              <div style={{ position: "absolute", bottom: "22%", right: "10%", width: 60, height: 48, borderRadius: "50%", background: C.red, opacity: 0.8 }} />
              <div style={{ fontSize: 80, marginBottom: 20, position: "relative", zIndex: 1 }}>🛞</div>
              <p style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 26, color: C.black, margin: 0, letterSpacing: 2, position: "relative", zIndex: 1 }}>Expertos en Llantas</p>
              <p style={{ color: C.brown, fontSize: 13, margin: "8px 0 0", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>Bellingham, Washington</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ padding: "7rem 1.5rem", maxWidth: 1200, margin: "0 auto", background: C.cream }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: C.yellow, color: C.black, fontFamily: "'Bebas Neue', cursive", fontSize: 12, letterSpacing: "0.35em", padding: "6px 20px", marginBottom: 16, border: `2px solid ${C.black}`, borderRadius: 2 }}>
            ENCUÉNTRENOS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem,6vw,4.5rem)", margin: 0, color: C.black }}>
            Contáctenos
          </h2>
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 4 }}>
            {["⚡","⚡","⚡"].map((z, i) => <span key={i} style={{ color: C.deepYel, fontSize: 18 }}>{z}</span>)}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 48 }}>
          {[
            { icon: "📍", label: "Dirección", value: "120 W Smith Road", sub: "Bellingham, WA" },
            { icon: "📞", label: "Teléfono", value: "(360) 000-0000", sub: "Llámenos hoy" },
            { icon: "🕐", label: "Horario", value: "Lun – Sáb: 8am – 6pm", sub: "Domingo: Cerrado" },
          ].map((item) => (
            <div key={item.label} style={{
              background: C.yellow, border: `3px solid ${C.black}`, borderRadius: 4, padding: "2.5rem",
              textAlign: "center", boxShadow: `5px 5px 0 ${C.black}`, transition: "all 0.2s", position: "relative", overflow: "hidden"
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `8px 8px 0 ${C.black}`; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `5px 5px 0 ${C.black}`; }}
            >
              <div style={{ position: "absolute", top: 8, right: 10, width: 22, height: 18, borderRadius: "50%", background: C.red, opacity: 0.6 }} />
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: C.brown, marginBottom: 8, fontWeight: 700 }}>{item.label}</p>
              <p style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: C.black, margin: 0, letterSpacing: 1 }}>{item.value}</p>
              <p style={{ fontSize: 13, color: C.brown, marginTop: 4, fontWeight: 500 }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: C.black, border: `3px solid ${C.black}`, borderRadius: 4,
          padding: "4rem 2rem", textAlign: "center", boxShadow: `8px 8px 0 ${C.deepYel}`,
          position: "relative", overflow: "hidden"
        }}>
          {/* Big cheek circles as BG accent */}
          <div style={{ position: "absolute", bottom: -30, left: "5%", width: 140, height: 110, borderRadius: "50%", background: C.red, opacity: 0.3 }} />
          <div style={{ position: "absolute", bottom: -30, right: "5%", width: 140, height: 110, borderRadius: "50%", background: C.red, opacity: 0.3 }} />
          <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2rem,5vw,3.5rem)", color: C.yellow, margin: "0 0 1rem", position: "relative", zIndex: 1 }}>
            ¿Necesita Ayuda <span style={{ color: C.cream }}>Hoy?</span>
          </h3>
          <p style={{ color: "rgba(255,253,231,0.7)", marginBottom: 36, maxWidth: 440, margin: "0 auto 2rem", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
            No espere más. Visítenos en Bellingham o llámenos y con gusto lo atendemos de inmediato.
          </p>
          <a href="tel:3600000000" style={{
            display: "inline-block", padding: "18px 48px",
            background: C.yellow, color: C.black,
            fontFamily: "'Bebas Neue', cursive", fontSize: 22, letterSpacing: 3,
            textDecoration: "none", border: `3px solid ${C.yellow}`, borderRadius: 2,
            boxShadow: `5px 5px 0 ${C.deepYel}`, transition: "all 0.15s", position: "relative", zIndex: 1
          }}
            onMouseOver={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = `7px 7px 0 ${C.deepYel}`; }}
            onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `5px 5px 0 ${C.deepYel}`; }}
          >
            ⚡ Llamar Ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.black, borderTop: `3px solid ${C.yellow}`, padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 22 }}>⚡</span>
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 20, letterSpacing: 2, color: C.yellow }}>Alejandro&apos;s Tire Repair</span>
          <span style={{ fontSize: 22 }}>⚡</span>
        </div>
        <p style={{ color: "rgba(255,215,0,0.5)", fontSize: 13, margin: "0 0 6px" }}>120 W Smith Road, Bellingham, WA</p>
        <p style={{ color: "rgba(255,215,0,0.25)", fontSize: 12, margin: 0 }}>© {new Date().getFullYear()} Alejandro&apos;s Tire Repair. Todos los derechos reservados.</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .grid-responsive { grid-template-columns: 1fr !important; }
          .hidden { display: none; }
        }
        .hidden { display: none; }
        @media (min-width: 769px) {
          .hidden.md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </main>
  );
}
