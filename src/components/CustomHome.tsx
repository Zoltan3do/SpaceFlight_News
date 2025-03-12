import { useEffect } from "react";
import FlipperCard from "./FlipperCard";
import { Article, spaceFlightStore } from "../store/spaceFlightStore";

function CustomHome() {
  const { listNow, search, setArticleNow } = spaceFlightStore();

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
        const result: Article[] = data.results;
        search(result);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };

  useEffect(() => {
    handleGetHome();
    setArticleNow({
      id: 0,
      title: "",
      authors: [],
      news_site: "",
      summary: "",
      published_at: "",
      image_url: "",
    });
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
