import { Route, Routes } from "react-router-dom";
import Landing from "../views/landing";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<Landing />} />
      </Routes>
    </main>
  );
};

export default Main;
