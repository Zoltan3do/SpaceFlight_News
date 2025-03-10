import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNav } from "./components/CustomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHome from "./components/CustomHome";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="gradient-generated vh-100 d-flex justify-content-center align-items-center">
          <div className="rounded rounded-5 border border-2 father-color px-5 py-4">
            <CustomNav></CustomNav>
            <Routes>
              <Route path="/" element={<CustomHome></CustomHome>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
