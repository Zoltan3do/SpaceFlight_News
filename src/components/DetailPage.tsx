import { useParams } from "react-router-dom";
import { Article, spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect, useState } from "react";
import gsap from "gsap";

function DetailPage() {
  const { id } = useParams();
  const { articleNow, setArticleNow } = spaceFlightStore();
  const [loading, setLoading] = useState(true);

  const handleFetch = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);
        const result: Article = data;
        setArticleNow(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
        setLoading(false);
      });
  };

  const handleFadeIn = () => {
    gsap.fromTo(
      "#detail-father",
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 1.5 }
    );

    gsap.fromTo(
      "#immagine-dettaglio",
      { opacity: 0, x: 150 },
      { opacity: 1, x: 0, duration: 1.5 }
    );
  };

  useEffect(() => {
    handleFetch();
    handleFadeIn();
  }, [articleNow.title]);

  if (loading || !articleNow.title || !articleNow.summary) {
    return (
      <div className="d-flex justify-content-center align-items-center my-3">
        <div className="spinner-border text-light" role="status"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div
            className="col col-12 col-sm-6 d-flex flex-column"
            id="detail-father"
          >
            <h1 className="text-light mb-4">{articleNow.title}</h1>
            <p className="text-light">{articleNow.summary}</p>
            <a
              href={articleNow.url}
              className="rounded rounded-3 p-2 bg-danger w-25 text-center mt-5"
              target="_blank"
              id="scopri"
            >
              Scopri di più{" "}
              <span className="material-symbols-outlined align-middle">
                arrow_outward
              </span>
            </a>
          </div>
          <div
            className="col col-12 col-sm-6 rounded rounded-4 overflow-hidden"
            id="immagine-dettaglio"
          >
            <img
              src={articleNow.image_url}
              alt="immagine articolo"
              className="w-100 rounded rounded-4 object-fit-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
