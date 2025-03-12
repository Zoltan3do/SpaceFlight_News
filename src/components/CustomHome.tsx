import { useEffect } from "react";
import FlipperCard from "./FlipperCard";
import { spaceFlightStore } from "../store/spaceFlightStore";

function CustomHome() {
  const { listNow, search } = spaceFlightStore();

  const handleGetHome = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);
        const result: object[] = data.results;
        search(result);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };

  useEffect(() => {
    handleGetHome();
  }, []);

  return (
    <div className="container" id="figliolino">
      {listNow.length > 0 ? (
        <div className="row">
          {listNow.slice(0, 8).map((item, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <FlipperCard
                id={item?.id}
                image_url={item?.image_url}
                author={item?.authors[0]?.name}
                title={item?.title}
                url={item?.url}
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
  );
}

export default CustomHome;
