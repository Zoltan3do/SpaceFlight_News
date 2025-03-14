import "./searchcss.css";
import { spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect } from "react";

function CustomSearch() {
  const { changeState } = spaceFlightStore();
  const currentUrl: string = window.location.href;

  useEffect(() => {
    if (currentUrl === "http://localhost:5173/search") {
      changeState("search");
    }
  }, []);
  
  return (
    <>
      <div>
        <div className="d-flex justify-content-center">
          <form className="search">
            <div className="search__wrapper">
              <input
                type="text"
                name=""
                placeholder="Search for..."
                className="search__field"
              />
              <button
                type="submit"
                className="fa fa-search search__icon"
              ></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CustomSearch;
