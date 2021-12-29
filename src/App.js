import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PaysManager from "./containers/PaysManager/PaysManager";
import PaysSoloPage from "./containers/PaysSoloPage/PaysSoloPage";
import Error404 from "./components/Error404/Error404";

import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter basename="/applications/les-pays-du-monde/">
        <Navbar />
        <Routes>
          <Route path="/" element={<PaysManager />} />
          <Route path="/pays/:id" element={<PaysSoloPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;