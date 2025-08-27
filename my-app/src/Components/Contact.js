import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';

import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import LinkedIn from './img/linkedin-social.png';
import Email from './img/icons/mail.png';



function Contact() {

      useEffect(() => {
        AOS.init({
            duration: 1250,
            once: true,
        });
        
        // Initialize EmailJS with your public key
        emailjs.init('OAeVoOcPeU1ZCFE-A');
    }, []);

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      console.log('Attempting to send email...');
      console.log('Form data:', new FormData(form.current));
  
      emailjs.sendForm('service_ufod1qr', 'template_zv07uef', form.current)
        .then((result) => {
            console.log('Success:', result);
            alert('Your message was sent successfully!');
            form.current.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('There was an error sending your message. Please check the console for details.');
        });
      }

  return (
    <div className="bg-main-dark">
      <TopNav />
      <div className="section">
        <div className="half-section text-side">
          <div className="content">
            <div className="section-text">
              <div className="top">
                <b className="secondary-headline">Get In Touch</b>
              </div>
              <div className="paragraph">
                Thank you for visiting my site! If you would like to get in touch with me, you can contact me directly by email, LinkedIn, or fill out the contact form to the right and I will get back to you as soon as I can.
              </div>
              
              <div className="d-flex flex-row gap-3 mt-4" data-aos="fade" data-aos-delay="300" data-aos-duration="6000" style={{ width: '75%', margin: '0 auto' }}>
                <button
                  className="button-4 d-flex align-items-center justify-content-center"
                  style={{ padding: '12px 20px', flex: '1' }}
                  onClick={() => window.location.href = 'mailto:johncrawforddesign@gmail.com'}
                >
                  <img src={Email} alt="Email" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Email
                </button>
                <button
                  className="button-4 d-flex align-items-center justify-content-center"
                  style={{ padding: '12px 20px', flex: '1' }}
                  onClick={() => window.open('https://www.linkedin.com/in/john-michaelcrawford', '_blank')}
                >
                  <img src={LinkedIn} alt="LinkedIn" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="half-section text-side">
          <div className="content">
            <div className="contact-form-container" data-aos="fade" data-aos-delay="200" data-aos-duration="5000">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="fields-group">
                  <div className="text-field">
                    <label className="field-label">First Name</label>
                    <input type="text" name="user_first_name" className="field-input" />
                  </div>
                  <div className="text-field">
                    <label className="field-label">Last Name</label>
                    <input type="text" name="user_last_name" className="field-input" />
                  </div>
                </div>
                
                <div className="text-field-full">
                  <label className="field-label">Email</label>
                  <input type="email" name="user_email" className="field-input" required />
                </div>
                
                <div className="text-field-full">
                  <label className="field-label">Subject</label>
                  <input type="text" name="subject" className="field-input" />
                </div>
                
                <div className="text-field-full">
                  <label className="field-label">Message</label>
                  <textarea name="message" className="field-textarea" rows="5" required></textarea>
                </div>
                
                <div className="button-group">
                  <input type="submit" value="Send Message" className="submit-button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;