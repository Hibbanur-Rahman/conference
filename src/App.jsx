import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
