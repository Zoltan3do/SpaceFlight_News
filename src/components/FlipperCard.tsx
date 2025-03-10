import { useEffect } from "react";
import "./FlipperCard.css";

function FlipperCard({ title, authors, url, image_url, news_site, summary }) {
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

  return (
    <>
      <div className="card" id="flip-card">
        <div className="card-inner" id="flip-card-inner">
          <div className="card-front">Front Content</div>
          <div className="card-back">Back Content</div>
        </div>
      </div>
    </>
  );
}

export default FlipperCard;
