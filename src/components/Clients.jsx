import { clients } from "../data/content.js";
import Reveal from "./Reveal.jsx";

// ── Local logo imports — adjust paths to match your actual asset locations ────
import logikLogo     from "../assets/Companies/logik-logo.png";
import badigaddiLogo from "../assets/Companies/Badigaddi.png";
import kyppLogo      from "../assets/Companies/kyppwhite.png";
import moDigitalLogo from "../assets/Companies/modigital.png";
import drinkrentLogo from "../assets/Companies/dplogo.png";
import soelLogo      from "../assets/Companies/SOELLogo.png";

const LOGOS = [
  { src: logikLogo,     alt: "Logik" },
  { src: badigaddiLogo, alt: "Badigaddi" },
  { src: kyppLogo,      alt: "KYPP" },
  { src: moDigitalLogo, alt: "Mo Digital" },
  { src: drinkrentLogo, alt: "Drink Rent" },
  { src: soelLogo,      alt: "SOEL" },
];

// Duplicate for seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS];

export default function Clients() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #080010 0%, #0c0520 25%, #080818 50%, #0e0600 75%, #060010 100%)",
      }}
    >
      {/* ── Atmosphere blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #FF3E20 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-20 left-10 w-[350px] h-[350px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #0d9488 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Top shimmer */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(255,62,32,0.4), transparent)",
          }}
        />
        {/* Bottom shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(13,148,136,0.5), rgba(139,92,246,0.4), transparent)",
          }}
        />
      </div>

      {/* ── Heading ── */}
      <Reveal>
        <div className="relative z-10 text-center mb-14 px-4">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{
              background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Worked with multiple startups
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-black"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #e2d9ff 30%, #FF3E20 65%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(255,62,32,0.3))",
            }}
          >
            Delivered 100% Satisfied Results
          </h2>

          {/* Rainbow underline */}
          <div
            className="mx-auto mt-5 h-1 w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #a78bfa, #60a5fa, #f472b6, #FF3E20, #fbbf24)",
            }}
          />
        </div>
      </Reveal>

      {/* ── Marquee track ── */}
      <div className="relative z-10">
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #080010, transparent)",
          }}
        />
        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #060010, transparent)",
          }}
        />

        {/* CSS infinite ticker — no JS animation = no pause at loop boundary */}
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 28s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="overflow-hidden">
          <div className="marquee-track items-center gap-8" style={{ alignItems: "center" }}>
            {TRACK.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-10 py-5 rounded-2xl transition-all duration-300 group"
                style={{
                  background: "transparent",
                  border: "none",
                  minWidth: 180,
                  height: 100,
                  marginRight: 40,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: 80, maxWidth: 180 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <Reveal>
        <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-6">
          {[
            { value: "50+",  label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "6+",   label: "Brand Partners" },
            { value: "3+",   label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p
                className="text-3xl font-black mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, #a78bfa, #FF3E20)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-white/50 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
