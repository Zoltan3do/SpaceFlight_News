import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNav } from "./components/CustomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHome from "./components/CustomHome";
import ContactPage from "./components/ContactPage";
import DetailPage from "./components/DetailPage";
import CustomSearch from "./components/CustomSearch";
import styled from "styled-components";
import cursor from "../src/assets/rocket-cursor.svg";
import NotFoundPage from "./components/NotFoundPage";
import BottomBar from "./components/BottomBar";
import ScrollToTop from "./components/ScrollToTop";

const CustomCursorArea = styled.div`
  cursor: url(${cursor}) 16 16, auto !important;
  width: 100%;
  height: 100%;
`;

function App() {
  

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <CustomCursorArea>
          <div className="gradient-generated vh-100 d-flex justify-content-center align-items-center">
            <div
              className="rounded rounded-5 border border-2 father-color px-3 py-4 z-1"
              id="figlioletto"
            >
              <div className="w-100 bg-transparent opacity d-flex justify-content-center align-items-center">
                <p className="text-center text-light titolone">SpaceFlight News</p>
              </div>
              <CustomNav></CustomNav>
              <div className="pb-5">
                <Routes>
                  <Route path="/" element={<CustomHome />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/article/:id" element={<DetailPage />} />
                  <Route path="/search" element={<CustomSearch />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
              <BottomBar></BottomBar>
            </div>
          </div>
        </CustomCursorArea>
      </BrowserRouter>
    </>
  );
}

export default App;