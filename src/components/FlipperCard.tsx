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
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const flipCard = document.getElementById("flip-card");

    if (!flipCard) return;

    const handleClick = () => {
      flipCard.classList.toggle("flipped");

      if (flipCard.classList.contains("flipped") && backCardRef.current) {
        setTimeout(() => {
          scrollIntervalRef.current = setInterval(() => {
            if (backCardRef.current) {
              backCardRef.current.scrollTop += 2;
              if (
                backCardRef.current.scrollTop >=
                backCardRef.current.scrollHeight -
                  backCardRef.current.clientHeight
              ) {
                clearInterval(scrollIntervalRef.current!);
              }
            }
          }, 20);
        }, 500);
      } else {
        clearInterval(scrollIntervalRef.current!);
      }
    };

    const handleMouseLeave = () => {
      if (backCardRef.current) {
        const scrollToTop = setInterval(() => {
          if (backCardRef.current!.scrollTop > 0) {
            backCardRef.current!.scrollTop -= 3;
          } else {
            clearInterval(scrollToTop);
          }
        }, 20);
      }
    };

    flipCard.addEventListener("click", handleClick);
    flipCard.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      flipCard.removeEventListener("click", handleClick);
      flipCard.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(scrollIntervalRef.current!);
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
        <div className="card-back">
          <Link to={`/article/${id}`}>
            <a target="_blank" rel="noopener noreferrer" className="mb-2">
              {news_site}
            </a>
          </Link>
          <p ref={backCardRef}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipperCard;
