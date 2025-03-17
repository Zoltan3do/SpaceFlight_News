import "./contactpage.css";
import { useState, ChangeEvent, useEffect } from "react";
import { spaceFlightStore } from "../store/spaceFlightStore";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

type FormType = {
  txtName: string;
  txtEmail: string;
  txtPhone: string;
  txtMsg: string;
};

function ContactPage() {
  const [formData, setFormData] = useState<FormType>({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });

  const { changeState } = spaceFlightStore();
  const currentUrl: string = window.location.href;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "SpaceFlight News - Question message";
    const body = `Nome: ${formData.txtName}\nEmail: ${formData.txtEmail}\nTelefono: ${formData.txtPhone}\nMessaggio: ${formData.txtMsg}`;

    window.location.href = `mailto:baronemanu109@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (currentUrl === "http://localhost:5173/contact") {
      changeState("contact");
    }
  }, []);

  return (
    <>
      <Container className="contact-form">
        <Form onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <Row>
            <Col md={6}>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  name="txtName"
                  placeholder="Name *"
                  value={formData.txtName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  name="txtEmail"
                  placeholder="Email *"
                  value={formData.txtEmail}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  name="txtPhone"
                  placeholder="Phone number *"
                  value={formData.txtPhone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Button type="submit" className="btnContact">
                  Invia
                </Button>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="form-group">
                <Form.Control
                  as="textarea"
                  name="txtMsg"
                  placeholder="Your message *"
                  style={{ width: "100%", height: "150px" }}
                  value={formData.txtMsg}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default ContactPage;