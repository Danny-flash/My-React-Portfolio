import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fpy3k7s', 'template_a1t3lik', form.current, 'F-9-XZ4coXTTKup2R')

        e.target.reset()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options"> 
                   <article className="contact__option" data-aos="zoom-in">
                       <MdOutlineEmail className="contact__option-icon"/>
                       <h4>Email</h4>
                       <h5>Danielmide10@gmail.com</h5>
                       <a href="mailto:Danielmide10@gmail.com" target="_blank">Send a Message</a>
                   </article>
                   <article className="contact__option" data-aos="zoom-in">
                       <RiMessengerLine className="contact__option-icon"/>
                       <h4>Messenger</h4>
                       <h5>Daniel Funmiluyi</h5>
                       <a href="https://m.me/daniel.olamide.39904" target="_blank">Send a Message</a>
                   </article>
                   <article className="contact__option" data-aos="zoom-in">
                       <BsWhatsapp className="contact__option-icon"/>
                       <h4>Whatsapp</h4>
                       <h5>Send a Message</h5>
                       <a href="https://wa.me/+2348166827347" target="_blank">Send a Message</a>
                   </article> 
                </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                       <textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea>
                       <button type="submit" className="btn btn-primary"> Send Message</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact
