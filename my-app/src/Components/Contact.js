import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './CSSSandbox.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ufod1qr', 'template_zv07uef', form.current, 'OAeVoOcPeU1ZCFE-A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }

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
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;