import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "routes/App.jsx";
import "styles/global.scss";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/LoadingContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LoadingProvider>
  </StrictMode>
);
