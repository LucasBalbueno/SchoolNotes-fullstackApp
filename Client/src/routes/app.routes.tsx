import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Overview } from "../pages/Overview";
import { Alunos } from "../pages/Alunos";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Overview />} />
            <Route path="/alunos" element={<Alunos />} />
          </Route>
          <Route path="/new" element={<New />} />
        </Routes>
    </BrowserRouter>
  );
}