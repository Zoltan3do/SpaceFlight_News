import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Registrazione del Service Worker (se il plugin PWA non lo fa automaticamente)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registrato con successo:", registration);
      })
      .catch((error) => {
        console.error("Errore nella registrazione del Service Worker:", error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
