import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "SpaceFlightNews by Zoltan",
        short_name: "SFNews",
        description:
          "The Spaceflight News è un prodotto di Zoltan. È la più completa e aggiornata Web App per le notizie sui voli spaziali attualmente disponibile.",
        theme_color: "#0168BA",
        background_color: "#004580",
        display: "standalone",
        icons: [
          {
            src: "ZLogo192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "ZLogo512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "mobileSS1204x768.png",
            sizes: "1024x768",
            type: "image/png",
          },
          {
            src: "desktopSS1920x1080.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
