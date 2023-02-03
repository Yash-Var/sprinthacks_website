import React from "react";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import mail from "./images/mail.png";

const Contact = () => {
  return (
    <div className="bg-fotter contact" id="contact">
      <div className="flex justify-center p-10 space-x-4 cont">
        <h1 className="text-white main text-3xl text_contact">Contact us :</h1>
        <div className="flex space-x-3 iconss">
          <a href="https://www.instagram.com/dsckiet/">
            <img src={instagram} className="contact-icon" />
          </a>
          <a href="https://twitter.com/dsckiet">
            <img src={twitter} className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/company/dsckiet/mycompany/">
            <img src={linkedin} className="contact-icon" />
          </a>
          <a href="mailto:dsckiet@gmail.com">
            <img src={mail} className="contact-icon " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
