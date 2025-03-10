import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNav } from "./components/CustomNav";

function App() {
  return (
    <>
      <div className="gradient-generated vh-100 d-flex justify-content-center align-items-center">
        <div className="rounded rounded-5 border border-2 father-color p-3">
          <CustomNav></CustomNav>
        </div>
      </div>
    </>
  );
}

export default App;
