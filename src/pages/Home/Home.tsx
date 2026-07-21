import { PageLayout } from "@/components/layout";
import { Footer, Navbar } from "@/components/navigation";
import { navbarItems } from "@/constants/navigation";

import { Homepage } from "@/features/homepage";

export function Home() {
  return (
    <PageLayout header={<Navbar items={navbarItems} />} footer={<Footer columns={[]} />}>
      <Homepage />
    </PageLayout>
  );
}
