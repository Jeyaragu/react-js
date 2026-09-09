// @ts-expect-error
import "./ContactUs.style.css";
import { useState } from "react";

import FormField from "../../molecules/FormField/FormField";

import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const ContactUs = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    message: ''
  });
  const validateForm = () => {
    let formIsValid = true;
    const newError = {
      name: '',
      email: '',
      message: ''
    }
    if (!feedback.name.trim()) {
      newError.name = 'Name is required';
      formIsValid = false;
    }
    if (!feedback.email.trim()) {
      newError.email = 'Email is required';
      formIsValid = false;
    }
    if (!feedback.message.trim()) {
      newError.message = 'Message is required';
      formIsValid = false;
    }
    setError(newError);
    return formIsValid;
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // update function pattern to update the new state based on the previous state
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    alert("Form submitted. Mail triggered to support@shopdemo.com");
    setFeedback({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form" >
      <FormField
        labelText="Name"
        htmlFor="name"
        inputId="name"
        inputName="name"
        inputType="text"
        placeHolder="Enter your name"
        inputValue={feedback.name}
        onChange={handleInputChange}
        children={error.name && <p className="error">{error.name}</p>}
      />
      <FormField
        labelText="Email"
        htmlFor="email"
        inputId="email"
        inputName="email"
        inputType="email"
        placeHolder="Enter your email"
        inputValue={feedback.email}
        onChange={handleInputChange}
        children={error.email && <p className="error">{error.email}</p>}
      />
      <FormField
        labelText="Message"
        htmlFor="message"
        inputId="message"
        inputName="message"
        inputType="text"
        placeHolder="Enter your message"
        inputValue={feedback.message}
        onChange={handleInputChange}
        children={error.message && <p className="error">{error.message}</p>}
      />
      <Button name="submit" type="submit" label="Submit" />
    </form>
  );
};

export default ContactUs;
