"use client";

import React from "react";

const FormComponent: React.FC = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzhnN12W-z9JG_peIh49luAPdP8erRamK4iPvZRu6wKp44KlNYVJdDx8gDi-SRNPMF9/exec";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then(() => {
        alert("Form submitted successfully!");
        form.reset();
      })
      .catch(() => {
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <div className=" bg-dashes-bg-purple-2 py-10">
       <h2 className=" text-center text-4xl">Clairvill  form </h2>

      <div className="min-h-screen flex md:flex-row flex-col-reverse items-center justify-center bg-gray-transparent ">
      
        <div className=" w-full lg:w-1/2  bg-dashes-bg-purple shadow-lg  p-8  max-w-md z-10  ">
         
          <form id="submit-to-google-sheet" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_number"
                className="block text-sm font-medium text-white"
              >
                Contact Number
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                type="text"
                name="contact_number"
                id="contact_number"
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-white"
              >
                Gender
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                name="gender"
                id="gender"
                required
              >
                <option value="" disabled hidden>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                name="message"
                id="message"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <div className="flex items-center mb-4">
              <input
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                type="checkbox"
                id="age"
              />
              <label htmlFor="age" className="ml-2 text-sm text-white">
                I confirm that I am over 18 years old
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                type="checkbox"
                id="ex"
                required
              />
              <label htmlFor="ex" className="ml-2 text-sm text-white">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full  text-dashes-bg-purple bg-white py-2 px-4 rounded-md shadow-md hover:bg-new-color-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
