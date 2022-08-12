import { Route, Routes, Navigate } from "react-router-dom";
import About from "../components/about";
import Home from "../components/home";

const landing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default landing;
