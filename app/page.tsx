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

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#F26522", color: "#1a1008", overflowX: "hidden", fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled ? "rgba(242,101,34,0.97)" : "transparent",
        borderBottom: scrolled ? "3px solid #1a1008" : "none",
        boxShadow: scrolled ? "0 4px 0 #1a1008" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", border: "3px solid #1a1008", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🛞</div>
            <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, letterSpacing: 2, color: "#1a1008" }}>
              Alejandro&apos;s Tire Repair
            </span>
          </div>
          <div className="hidden md:flex" style={{ gap: 32, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a1008" }}>
            {["inicio","servicios","nosotros","contacto"].map(s => (
              <a key={s} href={`#${s}`} style={{ textDecoration: "none", color: "#1a1008", borderBottom: "2px solid transparent", paddingBottom: 2, transition: "border-color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "#1a1008")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "transparent")}
              >{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1008" }}>
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => <span key={i} style={{ display: "block", width: "100%", height: 3, backgroundColor: "#1a1008", borderRadius: 2, transition: "all 0.2s",
                transform: menuOpen ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"none") : "none",
                opacity: menuOpen && i===1 ? 0 : 1
              }} />)}
            </div>
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "#1a1008", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: 16, borderTop: "3px solid #F26522" }}>
            {["inicio","servicios","nosotros","contacto"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)} style={{ color: "#F26522", textDecoration: "none", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", fontSize: 14 }}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", backgroundColor: "#F26522" }}>
        {/* Decorative rings */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          {[640, 500, 360, 220].map((size, i) => (
            <div key={size} style={{
              position: "absolute", borderRadius: "50%",
              border: `${i % 2 === 0 ? 3 : 2}px solid`,
              borderColor: i % 2 === 0 ? "rgba(26,16,8,0.15)" : "rgba(255,255,255,0.2)",
              width: size, height: size,
              animation: `spin ${18 + i * 7}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`
            }} />
          ))}
        </div>

        {/* Halftone dots pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07,
          backgroundImage: "radial-gradient(circle, #1a1008 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem", maxWidth: 900, margin: "0 auto", animation: "slideUp 0.8s ease forwards" }}>
          {/* Badge */}
          <div style={{
            display: "inline-block", background: "#1a1008", color: "#F26522",
            fontFamily: "'Bebas Neue', cursive", fontSize: 13, letterSpacing: "0.3em",
            padding: "8px 24px", marginBottom: 28, borderRadius: 2,
          }}>
            · Servicio Profesional de Llantas · Bellingham, WA ·
          </div>

          <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(5rem,14vw,10rem)", lineHeight: 0.9, margin: "0 0 1rem", color: "#1a1008" }}>
            <span style={{ display: "block" }}>Alejandro&apos;s</span>
            <span style={{ display: "block", WebkitTextStroke: "3px #1a1008", color: "#fff", textShadow: "4px 4px 0 #1a1008" }}>
              Tire Repair
            </span>
          </h1>

          <p style={{ color: "#1a1008", fontSize: "1.1rem", maxWidth: 480, margin: "1.5rem auto 2.5rem", lineHeight: 1.6, fontWeight: 500 }}>
            Expertos en llantas con años de experiencia. Rápido, confiable y al mejor precio de Bellingham.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <a href="#servicios" style={{
              padding: "16px 36px", background: "#1a1008", color: "#F26522",
              fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 3,
              textDecoration: "none", borderRadius: 2, border: "3px solid #1a1008",
              transition: "all 0.15s", display: "inline-block",
              boxShadow: "4px 4px 0 rgba(26,16,8,0.4)"
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "6px 6px 0 rgba(26,16,8,0.4)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "4px 4px 0 rgba(26,16,8,0.4)"; }}
            >Ver Servicios</a>
            <a href="#contacto" style={{
              padding: "16px 36px", background: "#fff", color: "#1a1008",
              fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 3,
              textDecoration: "none", borderRadius: 2, border: "3px solid #1a1008",
              transition: "all 0.15s", display: "inline-block",
              boxShadow: "4px 4px 0 rgba(26,16,8,0.4)"
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "6px 6px 0 rgba(26,16,8,0.4)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "4px 4px 0 rgba(26,16,8,0.4)"; }}
            >Contáctenos</a>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <div style={{ background: "#1a1008", padding: "14px 0", overflow: "hidden", borderTop: "3px solid #F26522", borderBottom: "3px solid #F26522" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 25s linear infinite" }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} style={{ marginRight: 64, fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: "0.25em", color: "#F26522" }}>
              🛞 BALANCEO &nbsp;·&nbsp; CAMBIO DE LLANTAS &nbsp;·&nbsp; REPARACIÓN &nbsp;·&nbsp; ALINEACIÓN &nbsp;·&nbsp; NITRÓGENO &nbsp;·&nbsp; INSPECCIÓN GRATIS
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="servicios" style={{ padding: "7rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#1a1008", color: "#F26522", fontFamily: "'Bebas Neue', cursive", fontSize: 12, letterSpacing: "0.35em", padding: "6px 20px", marginBottom: 16 }}>
            LO QUE OFRECEMOS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem,6vw,4.5rem)", margin: 0, color: "#1a1008", WebkitTextStroke: "1px #1a1008" }}>
            Nuestros Servicios
          </h2>
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 6 }}>
            {[...Array(5)].map((_,i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1008" }} />)}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: i % 3 === 1 ? "#1a1008" : "#fff",
              color: i % 3 === 1 ? "#F26522" : "#1a1008",
              border: "3px solid #1a1008",
              borderRadius: 4,
              padding: "2.5rem",
              transition: "all 0.2s",
              boxShadow: "5px 5px 0 #1a1008",
              cursor: "default",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "8px 8px 0 #1a1008"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "5px 5px 0 #1a1008"; }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 24, letterSpacing: 1, margin: "0 0 10px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="nosotros" style={{ background: "#1a1008", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #F26522 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-responsive">
          <div>
            <div style={{ display: "inline-block", background: "#F26522", color: "#1a1008", fontFamily: "'Bebas Neue', cursive", fontSize: 12, letterSpacing: "0.35em", padding: "6px 20px", marginBottom: 24 }}>
              ¿POR QUÉ ELEGIRNOS?
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3rem,7vw,5rem)", color: "#fff", margin: "0 0 1.5rem", lineHeight: 1 }}>
              Calidad<br /><span style={{ color: "#F26522" }}>y Confianza</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              En <strong style={{ color: "#fff" }}>Alejandro&apos;s Tire Repair</strong>, tratamos cada vehículo como si fuera el nuestro. Contamos con técnicos experimentados y equipos modernos para garantizar su seguridad.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 48, fontSize: 15 }}>
              Precios justos, tiempos de espera mínimos y resultados que hablan por sí solos.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[["10+", "Años de experiencia"], ["5,000+", "Clientes felices"], ["100%", "Garantía"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center", border: "2px solid rgba(242,101,34,0.4)", padding: "20px 12px", borderRadius: 4 }}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 36, color: "#F26522", lineHeight: 1 }}>{num}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: "100%", maxWidth: 400, aspectRatio: "1", border: "3px solid #F26522",
              background: "rgba(242,101,34,0.08)", borderRadius: 4,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              position: "relative", boxShadow: "8px 8px 0 #F26522"
            }}>
              <div style={{ fontSize: 80, marginBottom: 20 }}>🛞</div>
              <p style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 28, color: "#F26522", margin: 0, letterSpacing: 2 }}>Expertos en Llantas</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "8px 0 0", letterSpacing: "0.15em", textTransform: "uppercase" }}>Bellingham, Washington</p>
              <div style={{ position: "absolute", top: -12, right: -12, width: 40, height: 40, background: "#F26522", borderRadius: 2, transform: "rotate(12deg)" }} />
              <div style={{ position: "absolute", bottom: -10, left: -10, width: 28, height: 28, border: "3px solid #F26522", borderRadius: 2, transform: "rotate(-8deg)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ padding: "7rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#1a1008", color: "#F26522", fontFamily: "'Bebas Neue', cursive", fontSize: 12, letterSpacing: "0.35em", padding: "6px 20px", marginBottom: 16 }}>
            ENCUÉNTRENOS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem,6vw,4.5rem)", margin: 0, color: "#1a1008" }}>
            Contáctenos
          </h2>
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 6 }}>
            {[...Array(5)].map((_,i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1008" }} />)}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 48 }}>
          {[
            { icon: "📍", label: "Dirección", value: "120 W Smith Road", sub: "Bellingham, WA" },
            { icon: "📞", label: "Teléfono", value: "(360) 000-0000", sub: "Llámenos hoy" },
            { icon: "🕐", label: "Horario", value: "Lun – Sáb: 8am – 6pm", sub: "Domingo: Cerrado" },
          ].map((item) => (
            <div key={item.label} style={{
              background: "#fff", border: "3px solid #1a1008", borderRadius: 4, padding: "2.5rem",
              textAlign: "center", boxShadow: "5px 5px 0 #1a1008", transition: "all 0.2s"
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "8px 8px 0 #1a1008"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "5px 5px 0 #1a1008"; }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "#999", marginBottom: 8, fontWeight: 600 }}>{item.label}</p>
              <p style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#1a1008", margin: 0, letterSpacing: 1 }}>{item.value}</p>
              <p style={{ fontSize: 13, color: "#777", marginTop: 4 }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: "#1a1008", border: "3px solid #1a1008", borderRadius: 4,
          padding: "4rem 2rem", textAlign: "center", boxShadow: "8px 8px 0 rgba(26,16,8,0.3)",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle, #F26522 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
          <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", margin: "0 0 1rem" }}>
            ¿Necesita Ayuda <span style={{ color: "#F26522" }}>Hoy?</span>
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, maxWidth: 440, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            No espere más. Visítenos en Bellingham o llámenos y con gusto lo atendemos de inmediato.
          </p>
          <a href="tel:3600000000" style={{
            display: "inline-block", padding: "18px 48px",
            background: "#F26522", color: "#1a1008",
            fontFamily: "'Bebas Neue', cursive", fontSize: 22, letterSpacing: 3,
            textDecoration: "none", border: "3px solid #F26522", borderRadius: 2,
            boxShadow: "5px 5px 0 rgba(242,101,34,0.4)", transition: "all 0.15s"
          }}
            onMouseOver={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "7px 7px 0 rgba(242,101,34,0.4)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "5px 5px 0 rgba(242,101,34,0.4)"; }}
          >
            Llamar Ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1008", borderTop: "3px solid #F26522", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 22 }}>🛞</span>
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 2, color: "#F26522" }}>Alejandro&apos;s Tire Repair</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 6px" }}>120 W Smith Road, Bellingham, WA</p>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, margin: 0 }}>© {new Date().getFullYear()} Alejandro&apos;s Tire Repair. Todos los derechos reservados.</p>
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
        }
      `}</style>
    </main>
  );
}
