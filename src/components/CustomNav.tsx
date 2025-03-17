import { Link } from "react-router-dom";
import { spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect } from "react";

export const CustomNav = () => {
  const { stateNow, changeState } = spaceFlightStore();

  const handleChangeState = (state: string) => {
    changeState(state);
  };

  useEffect(() => {}, [stateNow]);
  return (
    <>
      <nav className="bg-transparent opacity-90 fixed top-0 left-0 w-100 z-50 bg-white transition duration-300 d-none d-lg-block">
        <ul className="navList d-flex gap-3 bg-transparent justify-content-evenly">
          <Link to="/">
            <li
              className={`rounded rounded-4 text-dark bg-light border liEl py-1 px-3 ${
                stateNow == "" ? "focused-navlink" : ""
              }`}
              onClick={() => handleChangeState("")}
            >
              HOME
            </li>
          </Link>
          <Link to="/search">
            <li
              className={`rounded rounded-4 text-dark bg-light border liEl py-1 px-3 ${
                stateNow == "search" ? "focused-navlink" : ""
              }`}
              onClick={() => handleChangeState("search")}
            >
              SEARCH
            </li>
          </Link>
          <Link to="./contact">
            <li
              className={`rounded rounded-4 text-dark bg-light border liEl py-1 px-3 ${
                stateNow == "contact" ? "focused-navlink" : ""
              }`}
              onClick={() => handleChangeState("contact")}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
