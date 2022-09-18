import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID } = process.env;

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, form.current, REACT_APP_EMAILJS_USER_ID).then(
            (result) => {
                console.log(result.text);
                e.target.reset();
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>lakkakula.saidev@gmail.com</h5>
                        <a href="mailto:lakkakula.saidev@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>lakkakula.saidev@gmail.com</h5>
                        <a href="mailto:lakkakula.saidev@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+49 17645751476</h5>
                        <a href="https://api.whatsapp.com/send?phone+4917645751476" target="_blank">
                            Text me
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full Name" required />
                    <input type="email" name="email" placeholder="Your Emai" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
