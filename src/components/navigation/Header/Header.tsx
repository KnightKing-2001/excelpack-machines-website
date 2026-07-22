import { Navbar } from "@/components/navigation/Navbar";
import { TopBar } from "@/components/navigation/TopBar";

import { topBarData } from "../TopBar/TopBar.data";

import type { NavbarProps } from "@/components/navigation/Navbar";

export function Header(props: NavbarProps) {
  return (
    <>
      <TopBar
        email={topBarData.email}
        phone={topBarData.phone}
        location={topBarData.location}
        language={topBarData.language}
        ctaLabel={topBarData.cta.label}
        ctaHref={topBarData.cta.href}
      />

      <Navbar {...props} />
    </>
  );
}
