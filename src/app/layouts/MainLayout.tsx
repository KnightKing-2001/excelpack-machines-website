import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/components/navigation";

import { navbarItems } from "@/constants/navigation";

export default function MainLayout() {
  return (
    <>
      <Header
        logo={
          <img
            src="/images/ExcelPack Logo.jpeg"
            alt="Excelpack Machines"
            className="h-14 w-auto object-contain"
          />
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
