import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTopWithFallback = () => {
      window.scrollTo(0, 0);

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }, 200);
    };

    scrollToTopWithFallback();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
