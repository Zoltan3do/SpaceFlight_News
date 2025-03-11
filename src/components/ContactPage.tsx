import "./contactpage.css";

function ContactPage() {
  return (
    <>
      <div className="container contact-form">
        <form method="post">
          <h3>Inviaci un messaggio</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Nome *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Email *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Telefono *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  value="Invia"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Tuo messaggio *"
                  style={{ width: "100%", height: "150px" }}
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
