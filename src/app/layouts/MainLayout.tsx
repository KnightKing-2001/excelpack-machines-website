import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "@/components/navigation";

import { navbarItems } from "@/constants/navigation";

export default function MainLayout() {
  return (
    <>
      <Navbar items={navbarItems} />

      <main>
        <Outlet />
      </main>

      <Footer columns={[]} />
    </>
  );
}
