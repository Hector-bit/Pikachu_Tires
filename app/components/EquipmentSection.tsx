"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Equipment data ────────────────────────────────────────────────────────────
const equipment = [
  {
    id: 1,
    tag: "Cambiador de Llantas",
    name: "Ranger Wheel Service",
    subtitle: "RimGuard Clamp System",
    description:
      "Cambiador de llantas profesional Ranger con sistema RimGuard que protege sus rines durante el montaje y desmontaje. Compatible con llantas de pasajeros y camionetas.",
    badge: "TIRE CHANGER",
    // Replace src with your actual image path, e.g. /images/tire-changer.jpg
    src: "/equipment-tire-changer.jpg",
    alt: "Ranger Wheel Service Tire Changer with RimGuard Clamp System",
    accent: "#FFD700",
  },
  {
    id: 2,
    tag: "Balanceador de Ruedas",
    name: "Ranger DST Balancer",
    subtitle: "Balanceo de Precisión",
    description:
      "Balanceador de ruedas Ranger DST de alta precisión para eliminar vibraciones. Compatible con todos los tamaños de llantas de pasajero incluyendo 175/65R15 y más.",
    badge: "WHEEL BALANCER",
    src: "/equipment-balancer.jpg",
    alt: "Ranger DST Wheel Balancer",
    accent: "#FFD700",
  },
  {
    id: 3,
    tag: "Sistema de Gestión",
    name: "Coats XR-1800",
    subtitle: "Ride Management System",
    description:
      "El sistema Coats XR-1800 Ride Management optimiza la combinación llanta-rin para la conducción más suave posible. Tecnología de taller profesional.",
    badge: "RIDE MANAGEMENT",
    src: "/equipment-coats.jpg",
    alt: "Coats XR-1800 Ride Management System",
    accent: "#FFD700",
  },
];

// ─── Single card ───────────────────────────────────────────────────────────────
function EquipmentCard({ item, index }: { item: any; index: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="equipment-card"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="card-image-wrap">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="card-img"
          style={{ objectFit: "cover" }}
        />
        <div className="card-img-overlay" />
        <span className="card-badge">{item.badge}</span>
      </div>

      {/* Body */}
      <div className="card-body">
        <p className="card-tag">⚡ {item.tag}</p>
        <h3 className="card-name">{item.name}</h3>
        <p className="card-subtitle">{item.subtitle}</p>
        <p className="card-desc">{item.description}</p>
      </div>

      <style jsx>{`
        .equipment-card {
          background: #111;
          border: 2px solid #2a2a2a;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: fadeUp 0.5s ease both;
          cursor: default;
        }
        .equipment-card:hover {
          border-color: #ffd700;
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(255, 215, 0, 0.18);
        }

        /* Image */
        .card-image-wrap {
          position: relative;
          width: 100%;
          height: 220px;
        }
        .card-img {
          transition: transform 0.4s ease;
        }
        .equipment-card:hover .card-img {
          transform: scale(1.04);
        }
        .card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0, 0, 0, 0.75) 100%
          );
          z-index: 1;
        }
        .card-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          z-index: 2;
          background: #ffd700;
          color: #000;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 4px 10px;
          border-radius: 2px;
          text-transform: uppercase;
        }

        /* Body */
        .card-body {
          padding: 20px 22px 26px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .card-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #ffd700;
          text-transform: uppercase;
          margin: 0;
        }
        .card-name {
          font-family: "Bebas Neue", "Impact", "Arial Black", sans-serif;
          font-size: 1.6rem;
          color: #fff;
          margin: 0;
          line-height: 1.1;
          letter-spacing: 0.03em;
        }
        .card-subtitle {
          font-size: 0.78rem;
          color: #888;
          margin: 0 0 6px;
          font-style: italic;
        }
        .card-desc {
          font-size: 0.88rem;
          color: #bbb;
          line-height: 1.6;
          margin: 0;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────
export default function EquipmentSection() {
  return (
    <section className="equipment-section" id="equipo">
      {/* Header */}
      <div className="section-header">
        <p className="section-eyebrow">⚡ TECNOLOGÍA PROFESIONAL ⚡</p>
        <h2 className="section-title">Nuestro Equipo</h2>
        <p className="section-sub">
          Trabajamos con maquinaria de nivel profesional para garantizar un
          balanceo y montaje perfectos en cada visita.
        </p>
        <div className="title-rule" />
      </div>

      {/* Cards grid */}
      <div className="cards-grid">
        {equipment.map((item, i) => (
          <EquipmentCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* CTA strip */}
      <div className="cta-strip">
        <p className="cta-text">
          ¿Listo para experimentar la diferencia del equipo profesional?
        </p>
        <a href="tel:5642436101" className="cta-btn">
          ⚡ Llamar Ahora
        </a>
      </div>

      <style jsx>{`
        /* ── Section wrapper ── */
        .equipment-section {
          background: #0a0a0a;
          padding: 80px 24px 96px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        /* ── Header ── */
        .section-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 56px;
        }
        .section-eyebrow {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #ffd700;
          text-transform: uppercase;
          margin: 0 0 14px;
        }
        .section-title {
          font-family: "Bebas Neue", "Impact", "Arial Black", sans-serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .section-sub {
          font-size: 0.95rem;
          color: #888;
          line-height: 1.7;
          margin: 0 0 24px;
        }
        .title-rule {
          width: 60px;
          height: 3px;
          background: #ffd700;
          margin: 0 auto;
          border-radius: 2px;
        }

        /* ── Grid ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CTA strip ── */
        .cta-strip {
          margin-top: 64px;
          border-top: 1px solid #222;
          padding-top: 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .cta-text {
          color: #ccc;
          font-size: 1.05rem;
          margin: 0;
        }
        .cta-btn {
          display: inline-block;
          background: #ffd700;
          color: #000;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px 36px;
          border-radius: 3px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          background: #ffe84d;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 215, 0, 0.35);
        }

        @media (max-width: 600px) {
          .equipment-section {
            padding: 60px 16px 72px;
          }
        }
      `}</style>
    </section>
  );
}
