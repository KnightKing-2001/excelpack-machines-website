import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/components/navigation";

import { navbarItems } from "@/constants/navigation";

export default function MainLayout() {
  return (
    <>
      <Header
        logo={
          <img src="/images/ExcelPack Logo.png" alt="Excelpack Machines" className="h-12 w-auto" />
        }
        items={navbarItems}
      />

      <main>
        <Outlet />
      </main>

      <Footer columns={[]} />
    </>
  );
}
