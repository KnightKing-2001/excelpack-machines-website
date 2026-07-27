import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    // Security: restrict to localhost only in dev (was host:true = exposed to LAN)
    host: "localhost",
    port: 5173,
    // Security headers for dev server
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    },
  },

  build: {
    // Prevent source maps in production (hides source code from attackers)
    sourcemap: false,
    // Warn if any single chunk exceeds 800 KB
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Split vendor chunks to improve caching and reduce attack surface
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "vendor";
          }
          if (id.includes("node_modules/zustand")) return "zustand";
          if (id.includes("node_modules/lucide-react")) return "icons";
        },
      },
    },
  },

  // Never expose .env values that don't start with VITE_ (defence in depth)
  envPrefix: "VITE_",
});
