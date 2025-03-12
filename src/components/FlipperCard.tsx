import { useEffect, useRef } from "react";
import "./FlipperCard.css";
import { Link } from "react-router-dom";

interface IFCard {
  id: number;
  title: string;
  author: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
}

function FlipperCard({
  id,
  title,
  author,
  image_url,
  news_site,
  summary,
  published_at,
}: IFCard) {
  const backCardRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const flipCard = document.getElementById("flip-card");

    if (!flipCard) return;

    const handleFlip = () => {
      flipCard.classList.toggle("flipped");
      if (!flipCard.classList.contains("flipped") && backCardRef.current) {
        backCardRef.current.scrollTop = 0;
      }
    };

    flipCard.addEventListener("click", handleFlip);

    return () => {
      flipCard.removeEventListener("click", handleFlip);
    };
  }, []);

  const formattedDate: string = published_at
    ? new Date(published_at).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Data non disponibile";

  return (
    <div className="card" id="flip-card">
      <div className="card-inner">
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
            <a target="_blank" rel="noopener noreferrer">
              {author}
            </a>
          </h1>
          <p>{title}</p>
          <p className="published-date">{formattedDate}</p>
        </div>
        <div className="card-back d-flex flex-column gap-2">
          <Link to={`/article/${id}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-danger px-2 py-1 rounded rounded-4 fs-6 text-center"
            >
              {news_site + " "}
              <span className="material-symbols-outlined align-middle fs-6 middle">
                arrow_outward
              </span>
            </a>
          </Link>
          <p ref={backCardRef}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipperCard;
