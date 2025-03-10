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
    let scrollToTopInterval: NodeJS.Timeout;
    let scrollDelayTimeout: NodeJS.Timeout;

    if (flipCard) {
      const handleClick = () => {
        flipCard.classList.toggle("flipped");

        const isFlipped = flipCard.classList.contains("flipped");

        if (isFlipped && backCardRef.current) {
          scrollDelayTimeout = setTimeout(() => {
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
            }, 20);
          }, 1000);
        } else {
          clearInterval(scrollInterval);
          clearTimeout(scrollDelayTimeout);
        }
      };

      const handleMouseLeave = () => {
        if (backCardRef.current) {
          scrollToTopInterval = setInterval(() => {
            if (backCardRef.current!.scrollTop > 0) {
              backCardRef.current!.scrollTop -= 1;
            } else {
              clearInterval(scrollToTopInterval);
            }
          }, 50);
        }
      };

      flipCard.addEventListener("mouseenter", handleClick);
      flipCard.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        flipCard.removeEventListener("mouseenter", handleClick);
        flipCard.removeEventListener("mouseleave", handleMouseLeave);
        clearInterval(scrollInterval);
        clearInterval(scrollToTopInterval);
        clearTimeout(scrollDelayTimeout); 
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
          <a href={url} target="_blank" rel="noopener noreferrer" className="mb-2">
            {news_site}
          </a>
          <p ref={backCardRef}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipperCard;
