import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home-component";
import Register from "./components/register-component";
import Login from "./components/login-component";
import Pokedex from "./components/pokedex-component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
