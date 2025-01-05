import React, { useState, useRef, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import Lottie from 'lottie-react';
import contactAnimation from '../../img/Contactus.json';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [buttonState, setButtonState] = useState('default'); // 'default', 'sending', 'sent'

    // Function to send email using EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        // Change button state to 'sending'
        setButtonState('sending');

        const templateParams = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            user_subject: form.current.user_subject.value,
            message: form.current.message.value,
        };

        emailjs.sendForm('service_ip2oo6u', 'template_cfc3n4f', form.current, 'sz-kNJ3ETM7G3_goz')
            .then((result) => {
                console.log(result.text);
                
                // Change button state to 'sent'
                setButtonState('sent');

                // Reset the button state after 2-3 seconds
                setTimeout(() => {
                    setButtonState('default');
                    form.current.reset(); // Optionally reset form fields
                }, 3000);
            }, (error) => {
                console.log(error.text);
                // In case of error, reset to default
                setButtonState('default');
            });
    };

    return (
        <div className={`contact-form ${darkMode ? '' : 'light-mode'}`} id="Contact">
            <h1 className="contact-heading">
                <span style={{ color: darkMode ? 'white' : 'black' }}>Contact </span>
                <span style={{ color: '#bc0af2' }}>Us</span>
            </h1>

            <div className="contact-container">
                <div className="c-left">
                    <Lottie animationData={contactAnimation} className="contact-animation" />
                </div>

                <div className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name="user_name" className="user" placeholder='Name' required />
                        <input type='email' name="user_email" className="user" placeholder='Email' required />
                        <input type="text" name="user_subject" className="user" placeholder="Subject" required />
                        <textarea name="message" className="user" placeholder='Message' required />
                        <input 
                            type="submit" 
                            value={buttonState === 'sending' ? 'Sending...' : buttonState === 'sent' ? 'Sent!' : 'Send Message'} 
                            className={`button c-button ${buttonState}`} 
                            disabled={buttonState === 'sending'} 
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
