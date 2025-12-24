"use client";

import { useMemo } from "react";
import { GlassNavbarReact } from "glass-aura-navbar";
import { navLinks } from "@/lib/navLinks";

const NAV_HEIGHT = 70;

export function AppNavbar() {
  const logoNode = useMemo(() => {
    if (typeof document === "undefined") return undefined;

    const wrapper = document.createElement("span");
    wrapper.className =
      "inline-flex items-center font-semibold tracking-wide text-slate-50 whitespace-nowrap";
    wrapper.setAttribute("aria-label", "Glass Aura");

    const img = document.createElement("img");
    img.src = "/logo.png";
    img.alt = "Glass Aura brand mark";
    img.height = 32;
    img.width = 32;
    img.loading = "lazy";
    img.decoding = "async";
    // img.className = "w-auto";

    const text = document.createElement("span");
    text.className = "text-base leading-tight";
    text.textContent = "Glass Aura";

    wrapper.append(img, text);
    return wrapper;
  }, []);

  return (
    <GlassNavbarReact
      className="mx-[1rem] mt-4"
      logo={logoNode ?? "Glass Aura"}
      links={navLinks}
      background="rgba(15,23,42,0.65)"
      color="white"
      blur={6}
      rounded
      height={`${NAV_HEIGHT}px`}
      position="fixed"
      onLinkClick={(link) => console.log(`Navigate to ${link.href}`)}
    />
  );
}

export default AppNavbar;
