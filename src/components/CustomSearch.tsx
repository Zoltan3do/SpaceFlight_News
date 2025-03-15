import "./searchcss.css";
import { Article, spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect, useState } from "react";
import FlipperCard from "./FlipperCard";

function CustomSearch() {
  const { changeState, customSearch, customListNow } = spaceFlightStore();
  const currentUrl: string = window.location.href;
  const [inSearch, setInSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;

  const handleSearchFetch = (page = 1) => {
    setIsLoading(true);
    fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?search=${inSearch}&limit=${itemsPerPage}&offset=${
        (page - 1) * itemsPerPage
      }`
    )
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

        setTotalPages(Math.ceil(data.count / itemsPerPage));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (currentUrl === "http://localhost:5173/search") {
      changeState("search");
    }

    setCurrentPage(1);
    handleSearchFetch();
  }, [inSearch]);

  useEffect(() => {
    if (inSearch) {
      handleSearchFetch(currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxPageButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    pages.push(
      <li
        key="prev"
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
      >
        <button
          className="page-link text-dark border-dark"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &laquo;
        </button>
      </li>
    );

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button
            className={`page-link border-dark ${
              currentPage === i
                ? "bg-dark text-light"
                : "text-light bg-transparent"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    pages.push(
      <li
        key="next"
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link text-dark border-dark"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &raquo;
        </button>
      </li>
    );

    return (
      <nav aria-label="Search results pagination">
        <ul className="pagination justify-content-center">{pages}</ul>
      </nav>
    );
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-center mb-2">
          <form className="search" onSubmit={(e) => e.preventDefault()}>
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
        <div className="container" id="figliolino">
          {isLoading ? (
            <div className="row">
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div
                className="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                aria-hidden="true"
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-dark disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
            </div>
          ) : customListNow.length > 0 ? (
            <>
              <div className="row">
                {customListNow.map((item, i) => (
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
              {totalPages > 1 && renderPagination()}
            </>
          ) : (
            <div className="text-center mt-4 text-light">
              <p>No results found. Try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CustomSearch;
