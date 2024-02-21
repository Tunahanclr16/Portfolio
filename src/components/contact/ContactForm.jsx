import React from 'react';

export default function ContactForm() {
  return (
    <div className="max-w-xl mx-auto p-8 bg-[#2C243B] mt-20 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-2 ">Contact Form</h2>
      <a href="https://wa.me/905551659502" className="text-gray-400 block text-sm mb-4">+90 555 165 95 02</a>
      <form
      action="https://getform.io/f/1aMRRQbW" method="POST"
      className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="text-white">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="text-white">E-mail:</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="text-white">Message:</label>
          <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
}
