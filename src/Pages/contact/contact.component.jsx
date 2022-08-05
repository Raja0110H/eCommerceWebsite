import React from 'react';
import './contact.styles.scss'
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";


class ContactPage extends React.Component {
   
    render() {
       
      return (
        <div className="container">
          <span className="big-circle"></span>
          <img src="" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h2 className="title-one">Let's get in touch</h2>
              <p className="text">
                Meticulous web developer with over 2 years of front end
                experience and passion for responsive website design and a firm
                believer in the mobile-first approach. Implemented new
                responsive website approach which increased mobile traffic by
                20%.
              </p>

              <div className="info">
                <div className="information">
                  <LocationOnIcon />
                  <p> Hampton,Virginia</p>
                </div>
                <div className="information">
                  <EmailIcon />
                  <p> rajahamilton0110gmail.com</p>
                </div>
                <div className="information">
                  <PhoneEnabledIcon />
                  <p> Phone 786-916-4933</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form
                action="index.html"
                autocomplete="off"
                className="contact_form"
              >
                <h3 className="title-two">Contact Me</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" />
                  <label for="">Username</label>
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div>
      );
    }
}

export default ContactPage;