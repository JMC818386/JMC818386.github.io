import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './CSSSandbox.css';

function Contact() {
  return (
    <div>
      <TopNav />
      <div className="container-fluid p-5 d-flex align-items-center justify-content-center bg-dark text-light" style={{ height: "90vh" }}>
        <div className="row">
          <div className="col-12">
            <div class="wrapper">

              <div className="inner">
                <form action="">
                  <h3>Contact Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore.
                  </p>
                  <label className="form-group">
                    <input type="text" className="form-control" required="" />
                    <span>Your Name</span>
                    <span className="border" />
                  </label>
                  <label className="form-group">
                    <input type="text" className="form-control" required="" />
                    <span htmlFor="">Your Mail</span>
                    <span className="border" />
                  </label>
                  <label className="form-group">
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                    <span htmlFor="">Your Message</span>
                    <span className="border" />
                  </label>
                  <button>
                    Submit
                    <i className="zmdi zmdi-arrow-right" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;