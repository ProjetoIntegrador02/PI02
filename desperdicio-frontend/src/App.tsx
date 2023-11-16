import "./App.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/header.components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Aligner } from "./components/Aligner";
import SobreNos from "./pages/sobre-nos";
import Ajude from "./pages/ajude-alguem";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Aligner>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ajude" element={<Ajude />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
          </Routes>
        </Aligner>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
