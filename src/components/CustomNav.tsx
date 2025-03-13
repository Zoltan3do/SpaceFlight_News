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
      <nav className="bg-transparent ">
        <ul className="navList d-flex gap-3 bg-transparent justify-content-evenly">
          <Link to="/">
            <li
              className={`rounded rounded-4 text-dark bg-light border  liEl py-1 px-3 ${
                stateNow == "home" ? "focused-navlink" : ""
              }`}
              onClick={() => handleChangeState("home")}
            >
              HOME
            </li>
          </Link>
          <li
            className={`rounded rounded-4 text-dark bg-light border  liEl py-1 px-3 ${
              stateNow == "search" ? "focused-navlink" : ""
            }`}
            onClick={() => handleChangeState("search")}
          >
            SEARCH
          </li>
          <Link to="./contact">
            <li
              className={`rounded rounded-4 text-dark bg-light border  liEl py-1 px-3 ${
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
