import { useRef, useEffect, CSSProperties } from 'react';

const UpworkIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.48 10.16c-2.2 0-3.32 1.37-3.95 2.68l-1.8-3.86H8.97v6.23c0 1.6-1.28 2.9-2.88 2.9s-2.88-1.3-2.88-2.9v-6.23H.48v6.23c0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6v-2.26l1.4 3.02 2.2-1.04-1.08-2.32c1.04 1.17 2.45 1.88 4.08 1.88 3.04 0 5.52-2.48 5.52-5.52s-2.48-5.52-5.52-5.52zm0 8.52c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
  </svg>
);

export default function AnimatedUpworkButton({ size = "normal" }: { size?: "normal" | "large" }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const updatePath = () => {
      el.style.setProperty(
        "--path",
        `path('M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0')`
      );
    };

    updatePath();
    const observer = new ResizeObserver(updatePath);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const isLarge = size === "large";
  const hClass = isLarge ? "h-14" : "h-12";
  const psClass = isLarge ? "ps-8" : "ps-6";
  const peClass = isLarge ? "pe-16" : "pe-14";
  const hoverPsClass = isLarge ? "hover:ps-16" : "hover:ps-14";
  const hoverPeClass = isLarge ? "hover:pe-8" : "hover:pe-6";
  const iconSize = isLarge ? 20 : 18;
  const iconContainerSize = isLarge ? "w-11 h-11" : "w-10 h-10";
  const hoverRightCalc = isLarge ? "group-hover:right-[calc(100%-50px)]" : "group-hover:right-[calc(100%-44px)]";
  const rightClass = isLarge ? "right-1.5" : "right-1";

  return (
    <a
      href="https://www.upwork.com/agencies/1818954484693860352/"
      target="_blank"
      rel="noopener noreferrer"
      ref={btnRef}
      style={{
        "--duration": 3,
        "--light-width": "100px",
        "--light-color": "#52992C",
        "--border-width": "1.5px",
        isolation: "isolate",
      } as CSSProperties}
      className={`relative inline-flex items-center text-sm font-medium rounded-full ${hClass} p-1 ${psClass} ${peClass} group transition-all duration-500 ${hoverPsClass} ${hoverPeClass} w-fit overflow-hidden cursor-pointer shadow-sm hover:shadow-md bg-zinc-200`}
    >
      {/* Glowing border animation */}
      <div
        className="absolute aspect-square inset-0 animate-star-btn bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)] z-0"
        style={{
          offsetPath: "var(--path)",
          offsetDistance: "0%",
          width: "var(--light-width)",
        } as CSSProperties}
      />
      {/* Inner background to mask center */}
      <div
        className="absolute inset-[var(--border-width)] rounded-[inherit] bg-white z-[1] transition-colors duration-500 group-hover:bg-zinc-50"
        aria-hidden="true"
      />

      <span className={`relative z-10 transition-all duration-500 whitespace-nowrap text-zinc-900 ${isLarge ? 'text-base' : ''}`}>
        Become a Client!
      </span>
      <div className={`absolute ${rightClass} ${iconContainerSize} bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center transition-all duration-500 ${hoverRightCalc} z-10`}>
        <UpworkIcon size={iconSize} />
      </div>
    </a>
  );
}
