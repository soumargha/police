import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./Login/login";
import Register from "./register/Register";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}