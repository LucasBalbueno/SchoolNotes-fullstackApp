import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Overview } from "../pages/Overview";
import { Alunos } from "../pages/Alunos";

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Overview />} />
            <Route path="/alunos" element={<Alunos />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}