import React from "react";
import ReactDOM from "react-dom/client"; // Para React 18+
import App from "./App"; // Asegúrate de que la ruta sea correcta

// Este es el punto de entrada principal de tu aplicación React.
// Aquí se "monta" el componente App en el elemento HTML con id="root".
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si tu plantilla de CodeSandbox es para React 17 o anterior,
// la sintaxis de renderizado sería diferente (ReactDOM.render),
// pero la mayoría de las plantillas modernas usan ReactDOM.createRoot.
