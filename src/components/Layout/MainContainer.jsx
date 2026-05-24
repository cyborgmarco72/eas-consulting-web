"use client";

import { usePathname } from "next/navigation";

export default function MainContainer({ children }) {
  const pathname = usePathname();
  
  // Si estamos en una Landing Page, quitamos el pt-20
  const isLanding = pathname?.startsWith("/lp-");

  return (
    <main className={`${isLanding ? "" : "pt-20"} bg-white flex-grow`}>
      {children}
    </main>
  );
}