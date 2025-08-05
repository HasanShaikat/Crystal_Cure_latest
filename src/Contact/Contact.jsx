
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [errors, setErrors] = useState({});
  // const [submitted, setSubmitted] = useState(false);

  // const validate = () => {
  //   const newErrors = {};

  //   if (!formData.name) newErrors.name = "Name is required.";
  //   if (!formData.email) {
  //     newErrors.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Please enter a valid email.";
  //   }
  //   if (!formData.message) newErrors.message = "Message is required.";

  //   return newErrors;
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formErrors = validate();
  //   if (Object.keys(formErrors).length > 0) {
  //     setErrors(formErrors);
  //     return;
  //   }

  //   setErrors({});
  //   setSubmitted(true);
    // Normally, you would send form data to an API or email service here.
    // console.log("Form submitted successfully:", formData);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xfe2tiv",     // e.g., "service_x123abc"
        "template_36kxp4k",    // e.g., "template_qwe123"
        form.current,
        "lytRW52s7YAS3Kjks"      // e.g., "PbL2M-_AbcD3ef"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again.");
          console.log(error.text);
        }
      );
  };  

  return (
    
  <section className="grid grid-cols-2 container mx-auto text-center my-6 px-4">
    <div >
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4 space-y-10 border shadow rounded">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-red-800 shadow-red-800/20 text-white px-4 py-2 rounded hover:bg-red-900 shadow-xl"
      >
        Send Message
      </button>
    </form>
    </div>
        <div className="space-y-6 content-center">
          <div>
            <h4 className="text-lg font-medium text-gray-700">Email</h4>
            <p className="text-gray-600">crystalcurebd@gmail.com</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700">Phone</h4>
            <p className="text-gray-600"> +880 189197 1990 / +880 190448 0448</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700">Address</h4>
            <p className="text-gray-600">672 B, North Kafrul, Dhaka-1207</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700">Website</h4>
            <p className="text-gray-600">www.ccpestcontrolbd.com</p>
          </div>
        </div>
    </section>
  );
};

export default ContactUs;