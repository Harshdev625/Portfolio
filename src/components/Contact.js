import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 className="text-center stack-container">Let's get in touch</h1>
        </div>
        <form className="container Contact-box" id="contact">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control no-resize" id="message" rows="4" />
          </div>
          <button type="submit" className="Send-Button grow">
            <a className="Send-link" href="mailto:devh9933@gmail.com">Send</a>
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
