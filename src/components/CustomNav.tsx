import { Link } from "react-router-dom";
import { spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect } from "react";

export const CustomNav = () => {
  const { stateNow, changeState } = spaceFlightStore();
  useEffect(() => {}, [stateNow]);
  return (
    <>
      <nav className="bg-transparent ">
        <ul className="navList d-flex gap-3 bg-transparent justify-content-evenly">
          <Link to="/">
            <li
              className="rounded rounded-4 text-dark bg-light border  liEl py-1 px-3"
              onClick={changeState("home")}
              style={
                stateNow === "home"
                  ? {
                      backgroundColor: "black !important",
                      color: "whitesmoke !important",
                    }
                  : {}
              }
            >
              HOME
            </li>
          </Link>
          <li
            className="rounded rounded-4 text-dark bg-light border  liEl py-1 px-3"
            onClick={changeState("search")}
            style={
              stateNow === "search"
                ? {
                    backgroundColor: "black !important",
                    color: "whitesmoke !important",
                  }
                : {}
            }
          >
            SEARCH
          </li>
          <Link to="./contact">
            <li
              className="rounded rounded-4 text-dark bg-light border  liEl py-1 px-3"
              onClick={changeState("contact")}
              style={
                stateNow === "contact"
                  ? {
                      backgroundColor: "black !important",
                      color: "whitesmoke !important",
                    }
                  : {}
              }
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
