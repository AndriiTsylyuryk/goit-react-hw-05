import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
