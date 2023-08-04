import React,{useState} from "react";

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 className="text-center stack-container">Let's get in touch</h1>
        </div>
        <form className="container Contact-box" id="contact">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <h5>Name</h5>
            </label>
            <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <h5>Email address</h5>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <h5>Message</h5>
            </label>
            <textarea className="form-control no-resize" id="message" rows="4" onChange={(e)=>{setMessage(e.target.value)}}/>
          </div>
          <button type="submit" className="Send-Button grow">
            <a className="Send-link" href={`mailto:devh9933@gmail.com?from=${email}&name=${name}&body=${message}`} >Send</a>
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
