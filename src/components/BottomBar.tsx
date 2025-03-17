import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

function BottomBar() {
  return (
    <>
      <Nav
        className="d-lg-none fixed-bottom bg-transparent"
        style={{
          zIndex: 50,
          height: "3rem",
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Container className="h-100 mx-auto" style={{ maxWidth: "32rem" }}>
          <Nav className="h-100 w-100 fw-medium" as="div">
            <div
              className="d-grid h-100 w-100"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              <Link
                to={"/"}
                className="d-inline-flex flex-column align-items-center justify-content-center text-decoration-none hover-overlay"
              >
                <button
                  type="button"
                  className="d-inline-flex flex-column align-items-center justify-content-center border-0 bg-transparent"
                >
                  <i
                    className="mb-1 fa fa-home text-light"
                    style={{ fontSize: 30 }}
                  ></i>
                </button>
              </Link>
              <Link
                to={"/search"}
                className="d-inline-flex flex-column align-items-center justify-content-center text-decoration-none hover-overlay"
              >
                <button
                  type="button"
                  className="d-inline-flex flex-column align-items-center justify-content-center border-0 bg-transparent"
                >
                  <i
                    className="fa fa-search text-light"
                    style={{ fontSize: 30 }}
                  ></i>
                </button>
              </Link>
              <Link
                to={"/contact"}
                className="d-inline-flex flex-column align-items-center justify-content-center text-decoration-none hover-overlay"
              >
                <button
                  type="button"
                  className="d-inline-flex flex-column align-items-center justify-content-center border-0 bg-transparent"
                >
                  <i
                    className="fa fa-user text-light"
                    style={{ fontSize: 30 }}
                  ></i>
                </button>
              </Link>
            </div>
          </Nav>
        </Container>
      </Nav>
    </>
  );
}

export default BottomBar;
