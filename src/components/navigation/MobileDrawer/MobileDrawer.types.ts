import type { ReactNode } from "react";

import type { NavbarItem } from "../Navbar/Navbar.types";

export interface MobileDrawerProps {
  open: boolean;

  onClose: () => void;

  items: NavbarItem[];

  logo?: ReactNode;

  footerContent?: ReactNode;
}
