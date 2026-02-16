import React, { useState } from "react";
import "../css/contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:munendrashiv97@gmail.com?subject=${subject}&body=${body}`;

      setSuccessMsg("✔ Message prepared successfully! Please send the email.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setErrors({});
    } else {
      setSuccessMsg("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      {/* Contact Start */}
      <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <h3>Get In Touch</h3>
            <h2>Contact for any query</h2>
          </div>

          <div className="contact-form">
            {successMsg && (
              <div className="sent text-success text-center mb-3">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <p className="text-danger">{errors.name}</p>
              </div>

              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <p className="text-danger">{errors.email}</p>
              </div>

              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.subject}</p>
              </div>

              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
                <p className="text-danger">{errors.message}</p>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-custom"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default ContactForm;
