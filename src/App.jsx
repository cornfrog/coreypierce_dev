import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const App = () => {

  const PORTFOLIO_ROUTES = [
    {
      key: 'home-route-key',
      path: '/',
      element: <Home />,
    },
    {
      key: 'projects-route-key',
      path: '/projects',
      element: <Projects />,
    },
    {
      key: 'experiences-route-key',
      path: '/experiences',
      element: <Experiences />,
    },
    {
      key: 'contact-route-key',
      path: '/contact',
      element: <Contact />,
    }
  ];

  const PORTFOLIO_ROUTELIST = PORTFOLIO_ROUTES.map((route) => {
    return (
      <Route
        key={route.key}
        path={route.path}
        element={route.element}
      />
    );
  });

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {PORTFOLIO_ROUTELIST}
      </Routes>
    </BrowserRouter>
  )
}

export default App
