import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'

const ContactMe = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(
        () => {
          setIsSuccess(true);
          setFormValues({ user_name: '', user_email: '', message: '' }); // Clear form after success
          setIsSubmit(false); // Reset isSubmit
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSuccess(false); // In case of failure, set isSuccess to false
        }
      );
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.user_name) {
      errors.user_name = "Name is required!";
    }
    if (!values.user_email) {
      errors.user_email = "Email is required!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }

    return errors;
  };

  return (
    <div className="main-content-contact">
      {isSuccess && (
        <div className="ui message success">Message sent successfully</div>
      )}

      {!isSuccess && (
        <form ref={form} onSubmit={handleSubmit}>
          <h1>Contact Me</h1>
          <div className="ui-divider"></div>
          <div className="ui-form">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formValues.user_name}
                onChange={handleChange}
              />
              <p className="error">{formErrors.user_name}</p>
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formValues.user_email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.user_email}</p>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
              />
              <p className="error">{formErrors.message}</p>
            </div>
            <button className="submit" type="submit">Send</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactMe;
