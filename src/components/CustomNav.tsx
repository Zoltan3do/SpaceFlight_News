import { Link } from "react-router-dom";

export const CustomNav = () => {
  return (
    <>
      <nav className="bg-transparent mb-5">
        <ul className="navList d-flex gap-3 bg-transparent justify-content-between">
          <Link to="/">
            <li className="rounded rounded-4 text-light liEl py-1 px-3">
              HOME
            </li>
          </Link>
          <li className="rounded rounded-4 text-light liEl py-1 px-3">
            SEARCH
          </li>
          <Link to="./contact">
            <li className="rounded rounded-4 text-light liEl py-1 px-3">
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
