import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Terapias from "./pages/Terapias";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import BlogDetail from "./pages/BlogDetail";
import Layoud from "./components/Layoud";
import ScrollToTop from "./components/ScrollToTop";

/** One shell to rule them all */
function PageShell({ children, className = "" }) {
  // Pick one width and it will apply everywhere
  // (feel free to change max-w-* value)
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageShell>
        <NavBar />
      </PageShell>

      <main className="py-6">
        <Routes>
          {/* Home SIN límite */}
          <Route path="/" element={<Home />} />

          {/* Rutas CON límite */}
          <Route
            path="/nosotros"
            element={
              <PageShell>
                <About />
              </PageShell>
            }
          />

          <Route
            path="/fechas"
            element={
              <PageShell>
                <Services />
              </PageShell>
            }
          />

          <Route
            path="/terapias"
            element={
              <PageShell>
                <Terapias />
              </PageShell>
            }
          />

          <Route
            path="/terapias/:slug"
            element={
              <PageShell>
                <ProductDetail />
              </PageShell>
            }
          />

          <Route
            path="/contacto"
            element={
              <PageShell>
                <Contact />
              </PageShell>
            }
          />

          <Route
            path="/blog"
            element={
              <PageShell>
                <Blog />
              </PageShell>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <PageShell>
                <BlogDetail />
              </PageShell>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <PageShell>
        <Footer />
      </PageShell>
    </BrowserRouter>
  );
}

export default App;
