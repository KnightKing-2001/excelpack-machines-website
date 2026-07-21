import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import { Home } from "@/pages/Home";
import IndustriesPage from "@/pages/Industries";
import NotFoundPage from "@/pages/NotFound";
import ProductsPage from "@/pages/Products";
import ResourcesPage from "@/pages/Resources";
import ServicesPage from "@/pages/Services";
import SolutionsPage from "@/pages/Solutions";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
