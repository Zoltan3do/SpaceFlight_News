import "./contactpage.css";
import { useState, ChangeEvent } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Messaggio dal modulo di contatto";
    const body = `Nome: ${formData.txtName}\nEmail: ${formData.txtEmail}\nTelefono: ${formData.txtPhone}\nMessaggio: ${formData.txtMsg}`;

    window.location.href = `mailto:destinazione@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <div className="container contact-form">
        <form onSubmit={handleSubmit}>
          <h3>Inviaci un messaggio</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Nome *"
                  value={formData.txtName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Email *"
                  value={formData.txtEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Telefono *"
                  value={formData.txtPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btnContact">
                  Invia
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Tuo messaggio *"
                  style={{ width: "100%", height: "150px" }}
                  value={formData.txtMsg}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
