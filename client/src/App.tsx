import Home from "pages/Home";
import Service from "pages/Service";
import TeamPage from "pages/Team";
import About from "pages/About";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "app/Layout";
import ScrollToTop from "app/ScrollToTop";
import Page404 from "pages/Page404";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {/* {message} */}
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/service"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/blog/our-team"
          element={
            <Layout>
              <TeamPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Page404 />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
