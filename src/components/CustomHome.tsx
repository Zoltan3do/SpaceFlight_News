import { useEffect } from "react";
import FlipperCard from "./FlipperCard";
import { Article, spaceFlightStore } from "../store/spaceFlightStore";
import gsap from "gsap";
import { Container, Row, Col, Spinner } from "react-bootstrap";

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

  const handleFadeIn = (nClass: string, dur: number) => {
    gsap.from(nClass, {
      opacity: 0.9,
      y: "-100vh",
      duration: dur,
      ease: "power1.out",
      stagger: 0.2,
      onStart: () =>
        (document.querySelector(nClass)!.style.pointerEvents = "none"),
      onComplete: () =>
        (document.querySelector(nClass)!.style.pointerEvents = "auto"),
    });
  };

  const handleRain = () => {
    let random: number;
    for (let i = 0; i < 8; i++) {
      random = Math.floor(Math.random() * 8 + 1);
      handleFadeIn(`.n${i}`, random / 4);
    }
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
    handleRain();
  }, []);

  return (
    <Container className="z-1" id="figliolino">
      {listNow.length > 0 ? (
        <Row id="flipContainer">
          {listNow.slice(0, 8).map((item, i) => (
            <Col key={i} lg={3} md={4} sm={6} xs={12} className={`mb-4 n${i}`}>
              <FlipperCard
                id={item?.id}
                image_url={item?.image_url}
                author={item?.authors[0]?.name}
                title={item?.title}
                summary={item?.summary}
                published_at={item?.published_at}
                news_site={item?.news_site}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  );
}

export default CustomHome;
