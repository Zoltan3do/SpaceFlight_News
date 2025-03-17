import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\//,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
        ],
      },
      manifest: {
        name: "SpaceFlightNews by Zoltan",
        short_name: "SFNews",
        description:
          "The Spaceflight News  è un prodotto di Zoltan. È la più completa e aggiornata Web App per le notizie sui voli spaziali attualmente disponibile.",
        theme_color: "#0168BA",
        background_color: "#004580",
        display: "standalone",
        icons: [
          {
            src: "leoLogo.jpg",
            sizes: "1120x1120",
            type: "image/jpg",
          },
        ],
      },
    }),
  ],
});
