import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import HomePage from "@/pages/Home";
import ProductsPage from "@/pages/Products";
import IndustriesPage from "@/pages/Industries";
import ServicesPage from "@/pages/Services";
import SolutionsPage from "@/pages/Solutions";
import ResourcesPage from "@/pages/Resources";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
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
