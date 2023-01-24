import Layout from "../src/components/Layout/Layout"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
