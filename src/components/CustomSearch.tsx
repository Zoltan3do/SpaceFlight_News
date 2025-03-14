import "./searchcss.css";
import { Article, spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect, useState } from "react";
import FlipperCard from "./FlipperCard";

function CustomSearch() {
  const { changeState, customSearch, customListNow } = spaceFlightStore();
  const currentUrl: string = window.location.href;
  const [inSearch, setInSearch] = useState("");

  const handleSearchFetch = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/?search=${inSearch}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);
        const result: Article[] = data.results;
        customSearch(result);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };

  useEffect(() => {
    if (currentUrl === "http://localhost:5173/search") {
      changeState("search");
    }
    handleSearchFetch();
  }, [inSearch]);

  return (
    <>
      <div className="">
        <div className="d-flex justify-content-center mb-2">
          <form className="search">
            <div className="search__wrapper">
              <input
                type="text"
                name=""
                placeholder="Search for..."
                className="search__field"
                onChange={(e) => setInSearch(e.target.value)}
              />
              <button
                type="submit"
                className="fa fa-search search__icon"
              ></button>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-center">
          <div className="container" id="figliolino">
            {customListNow.length > 0 ? (
              <div className="row">
                {customListNow.slice(0, 8).map((item, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                  >
                    <FlipperCard
                      id={item?.id}
                      image_url={item?.image_url}
                      author={item?.authors[0]?.name}
                      title={item?.title}
                      summary={item?.summary}
                      published_at={item?.published_at}
                      news_site={item?.news_site}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomSearch;
