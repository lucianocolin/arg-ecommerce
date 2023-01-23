import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
