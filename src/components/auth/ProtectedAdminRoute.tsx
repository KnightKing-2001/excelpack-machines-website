import { useEffect } from "react";
import { useAdminAuth } from "@/lib/useAdminAuth";
import AdminLogin from "@/pages/AdminLogin";

/**
 * ProtectedAdminRoute
 * -------------------
 * Wraps the Admin Dashboard. If the user is not authenticated it shows the
 * login screen (same URL, no redirect flash). On success it renders children.
 */
export default function ProtectedAdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, checkSession } = useAdminAuth();

  // Restore session from sessionStorage on first render
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <>{children}</>;
}
