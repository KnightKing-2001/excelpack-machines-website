import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";
import ProtectedAdminRoute from "@/components/auth/ProtectedAdminRoute";

import Homepage from "@/features/homepage/Homepage";
import ProductsPage from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import IndustriesPage from "@/pages/Industries";
import SolutionsPage from "@/pages/Solutions";
import ServicesPage from "@/pages/Services";
import ResourcesPage from "@/pages/Resources";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFoundPage from "@/pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
