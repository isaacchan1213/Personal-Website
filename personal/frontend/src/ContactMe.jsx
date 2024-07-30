import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
    <div className="max-w-[400px] md:max-w-[800px] h-[700px] m-auto p-[20px] rounded-[8px]">
      {isSuccess && (
        <div className="ui message success">Message sent successfully</div>
      )}

      {!isSuccess && (
        <form className="flex flex-col w-full" ref={form} onSubmit={handleSubmit}>
          <h1 className="text-center">Contact Me</h1>
          <div className="ui-divider"></div>
          <div className="ui-form">
            <div className="mb-[15px]">
              <label className="block mb-[5px]">Name</label>
              <input
                className="w-full p-[8px] border-[1px] border-solid border-moonYellow bg-moonYellow rounded-[4px]"
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formValues.user_name}
                onChange={handleChange}
              />
              <p className="error">{formErrors.user_name}</p>
            </div>
            <div className="mb-[15px]">
              <label className="block mb-[5px]">Email</label>
              <input
                className="w-full p-[8px] border-[1px] border-solid border-moonYellow bg-moonYellow rounded-[4px]"
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formValues.user_email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.user_email}</p>
            </div>
            <div className="mb-[15px]">
              <label className="block mb-[5px]">Message</label>
              <textarea
                className="w-full p-[8px] border-[1px] border-solid border-moonYellow bg-moonYellow rounded-[4px]"
                name="message"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
              />
              <p className="error">{formErrors.message}</p>
            </div>
            <button className="bg-moonYellow text-darkBlue border-none p-[10px] py-[5px] rounded-[4px] cursor-pointer text-[16px] hover:border-solid border hover:animate-blink-shadow-button" type="submit">Send</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactMe;
