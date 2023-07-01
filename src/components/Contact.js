import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <form>
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
          <input type="text" className="form-control" id="message" />
        </div>
        <button type="submit" className="btn btn-primary grow">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
