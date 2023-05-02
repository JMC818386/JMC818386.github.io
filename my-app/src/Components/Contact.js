import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './CSSSandbox.css';

function Contact() {
  return (
    <div className="bg-dark">
      <TopNav />
      <div className="container pt-5 d-flex justify-content-md-center bg-dark text-light vh-100">
        <div className="row flex-column flex-md-row justify-content-md-center">
          <div className="col d-flex flex-column pr-5">
              <h1 className="text-header contact-title">CONTACT</h1>
              <p className="contact-body">Thank you for visiting my site! If you would like to get in touch with me my contact information is listed below. You can contact me directly by email, or if you would like to leave a quick and simple message just fill out the contact form and I will get back to you as soon as I can. Also, feel free to connect with me through social media.</p>
              <p className="contact-body">johncrawforddesign@gmail.com</p>
              
          </div>
          <div className="col contact-input">
            <form action="">
              <label className="form-group">
                <input type="text" className="form-control" required="" />
                <span>Your Name</span>
                <span className="border" />
              </label>
              <label className="form-group">
                <input type="text" className="form-control" required="" />
                <span htmlFor="">Your Email</span>
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
              </label>
              <button>
                Submit
                <i className="zmdi zmdi-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;