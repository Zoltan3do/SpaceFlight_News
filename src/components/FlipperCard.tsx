import { useEffect, useRef } from "react";
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
  const backCardRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const flipCard = document.getElementById("flip-card");
    let scrollInterval: NodeJS.Timeout;

    if (flipCard) {
      const handleClick = () => {
        flipCard.classList.toggle("flipped");

        const isFlipped = flipCard.classList.contains("flipped");

        if (isFlipped && backCardRef.current) {
          scrollInterval = setInterval(() => {
            if (backCardRef.current) {
              backCardRef.current.scrollTop += 1;
              if (
                backCardRef.current.scrollTop >=
                backCardRef.current.scrollHeight -
                  backCardRef.current.clientHeight
              ) {
                clearInterval(scrollInterval);
              }
            }
          }, 50);
        } else {
          clearInterval(scrollInterval);
        }
      };

      flipCard.addEventListener("mouseenter", handleClick);

      return () => {
        flipCard.removeEventListener("mouseleave", handleClick);
        clearInterval(scrollInterval);
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
          <h1>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {authors[0]}
            </a>
          </h1>
          <p>{title}</p>
          <p className="published-date">{formattedDate}</p>
        </div>
        <div className="card-back">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {news_site}
          </a>
          <p ref={backCardRef}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipperCard;
