import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Grid from './img/Grid.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';



function Contact() {

      useEffect(() => {
        AOS.init({
            duration: 1250,
            once: true,
        });  
    }, []);

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ufod1qr', 'template_zv07uef', form.current, 'OAeVoOcPeU1ZCFE-A')
        .then((result) => {
            console.log(result.text);
            alert('Your message was sent successfully!');
            e.target.reset(); // clears the input fields
        }, (error) => {
            console.log(error.text);
            alert('There was an error sending your message. Please try again later.');
        });
      }

  return (
    <div className="vh-100 vw-100 d-flex flex-column justify-content-between alight-items-center bg-main-dark">
      <TopNav />
      <div className="container-fluid pt-5 d-flex justify-content-center text-light flex-grow-1">
        <div className="row flex-column flex-md-row justify-content-center w-100">
          <div className="col-lg-6">
              <h1 className="text-header contact-title mb-0 pb-4" data-aos="fade" data-aos-delay="300" data-aos-duration="5000">CONTACT</h1>
              <p className="contact-body mt-0 pt-0" data-aos="fade" data-aos-delay="200" data-aos-duration="5000">Thank you for visiting my site! If you would like to get in touch with me my contact information is listed below. You can contact me directly by email, or if you would like to leave a quick and simple message just fill out the contact form and I will get back to you as soon as I can. Also, feel free to connect with me through social media.</p>
              <p className="contact-body pb-2 d-flex justify-content-center" data-aos="fade" data-aos-delay="200" data-aos-duration="5000">johncrawforddesign@gmail.com</p>
              
          </div>
          <div className="col-lg-6 contact-input px-5" data-aos="fade" data-aos-delay="200" data-aos-duration="5000">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label className="pt-4">Email</label>
              <input type="email" name="user_email" />
              <label className="pt-4">Message</label>
              <textarea name="message" />
              <input type="submit" value="Send Message" className="mt-3 px-2 py-1"/>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;