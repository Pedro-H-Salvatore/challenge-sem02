import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./global.css";
import App from "./App";
import Inicio from "./pages/Inicio/Inicio";
import Ranking from "./pages/Ranking/Ranking";
import DetalheRanking from "./pages/Ranking/DetalheRanking";
import Faq from "./pages/Faq/Faq";
import Contato from "./pages/Contato/Contato";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error";
import ComoFunciona from "./pages/ComoFunciona";
import Equipe from "./pages/Equipe/Equipe";
import Sobre from "./pages/Sobre/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "sobre", element: <Sobre /> },
      { path: "ranking", element: <Ranking /> },
      { path: "ranking/:id", element: <DetalheRanking /> },
      { path: "faq", element: <Faq /> },
      { path: "contato", element: <Contato /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "equipe", element: <Equipe /> },
      { path: "como-funciona", element: <ComoFunciona /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
