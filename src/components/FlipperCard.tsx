/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./FlipperCard.css";

interface IFCard {
  title: string;
  authors: string[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
}

function FlipperCard({
  title,
  authors,
  url,
  image_url,
  news_site,
  summary,
  published_at,
}: IFCard) {
  useEffect(() => {
    const flipCard = document.getElementById("flip-card");
    if (flipCard) {
      const handleClick = () => {
        flipCard.classList.toggle("flipped");
      };
      flipCard.addEventListener("click", handleClick);

      return () => {
        flipCard.removeEventListener("click", handleClick);
      };
    }
  }, []);

  const formattedDate: string = published_at
    ? new Date(published_at).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Data non disponibile";

  return (
    <>
      <div className="card" id="flip-card">
        <div className="card-inner" id="flip-card-inner">
          <div
            className="card-front"
            style={{
              backgroundImage: `url(${image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <h1 className="mb-2">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {authors[0]}
              </a>
            </h1>
            <p>{title}</p>
            <p className="published-date">{formattedDate}</p>
          </div>
          <div className="card-back border border-1 border-light">
            <a href={url} target="_blank" className="mb-3">
              {news_site}
            </a>
            <p className="fs-6">{summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipperCard;
