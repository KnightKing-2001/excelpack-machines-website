import type { ReactNode } from "react";

import type { NavbarItem } from "../Navbar/Navbar.types";

export interface MobileNavbarProps {
  logo?: ReactNode;

  items: NavbarItem[];

  ctaLabel?: string;

  ctaHref?: string;
}
