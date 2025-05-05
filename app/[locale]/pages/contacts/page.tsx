"use client"
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Fikringiz uchun rahmat!');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Biz bilan bog'laning</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Ism"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Familiya"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Elektron pochta"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon raqam"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <textarea
          name="message"
          placeholder="Fikringizni yozing..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default ContactsPage;
