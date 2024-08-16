import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Contact from "./views/contact";
import SteeringCommittee from "./views/steeringCommittee";
import CallForPapers from "./views/callForPaper";
import PaperSubmission from "./views/paperSubmission";
import CallForSpecialSessions from "./views/callForSpecialSession";
const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-manuu" element={<Home />} />
        <Route path="/about-csit" element={<Home />} />
        <Route path="/call-for-papers" element={<CallForPapers/>} />
        <Route path="/paper-submission" element={<PaperSubmission/>} />
        <Route path="/special-sessions" element={<CallForSpecialSessions/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/steering-committee" element={<SteeringCommittee/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
