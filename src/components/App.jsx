import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../Pages/home/Home";
import About from "../Pages/About/About";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
