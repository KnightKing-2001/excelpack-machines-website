import type { ReactNode } from "react";

export interface MegaMenuItem {
  title: string;

  description?: string;

  href?: string;

  icon?: ReactNode;
}

export interface MegaMenuSection {
  label: string;

  items: MegaMenuItem[];
}

export interface MegaMenuProps {
  sections: MegaMenuSection[];

  triggerLabel?: string;
}
