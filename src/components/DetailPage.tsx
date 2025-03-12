import { useParams } from "react-router-dom";
import { spaceFlightStore } from "../store/spaceFlightStore";
import { useEffect } from "react";

function DetailPage() {
  const { id } = useParams();
  const { articleNow, setArticleNow } = spaceFlightStore();

  const handleFetch = () => {};
  fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Dati ricevuti:", data);
      const result: object = data;
      setArticleNow(result);
    })
    .catch((error) => {
      console.error("Errore nella richiesta:", error);
    });

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col col-12 col-sm-6 d-flex flex-column">
            <h1 className="text-light mb-4">{articleNow?.title}</h1>
            <p className="text-light">{articleNow?.summary}</p>

            <a href={articleNow?.url} className="rounded rounded-3 p-2 bg-danger w-25 text-center mt-5">
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
              src={articleNow?.image_url}
              alt="immagine articolo"
              className="w-100 h-100 rounded rounded-4    object-fit-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailPage;
