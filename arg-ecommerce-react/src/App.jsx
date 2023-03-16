import Layout from "../src/components/Layout/Layout"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
