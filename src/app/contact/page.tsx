'use client'
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import SocialMedia from '@/components/SocialMedia';
import { useRouter } from 'next/router';


const Contact = () => {

  const [formData, setFormData] = React.useState({
    subject: "",
    message: "",
    email: "",
    name: "",
  });
  const [formError, setFormError] = React.useState("");

  function handleChange (event: any): void {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

function handleSubmit(event: any): void {
    event.preventDefault();

    const { subject, message, email } = formData;

    if (!subject.trim()) {
      setFormError("Please enter a subject.");
      return;
    }

    if (!email.trim()) {
      setFormError("Please enter an email address.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    const mailto = "mailto:poole.reid@gmail.com";
    const body = `Subject: ${subject}\n\nMessage:\n${message}`;

    const url = `${mailto}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(url);

    setFormData({
      subject: "",
      message: "",
      email: "",
      name: "",
    });
    setFormError("");
  }

  return (
    <>
      <Head>
        <title>Contact - Barry Casper</title>
      </Head>
      <SocialMedia />
      <div className='flex row'>
        <Navbar />
        <div className='container mx-auto my-8'>
          <h1 className='text-2xl font-bold text-center mb-4'>Contact Me</h1>
          <div className='flex flex-col items-center'>
            <form className='w-full max-w-lg' onSubmit={handleSubmit}>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3 mb-6 md:mb-0'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input 
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                    id='name' 
                    type='text' 
                    name='name'
                    placeholder='Jane Doe'
                    value={formData.name}
                    onChange={handleChange} 
                    />
                </div>
                <div className='w-full px-3 mb-6 md:mb-0'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='name'>
                    Subject
                  </label>
                  <input 
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                    id='subject' 
                    type='text'
                    name='subject' 
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleChange} 
                    />
                </div>
                <div className='w-full px-3'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input 
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white' 
                    id='email' 
                    type='email' 
                    name='email'
                    placeholder='jane.doe@example.com' 
                    value={formData.email}
                    onChange={handleChange} 
                    />
                </div>
              </div>
              <div className='w-full px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='message'>
                  Message
                </label>
                <textarea 
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48' 
                  id='message'
                  name='message' 
                  placeholder='Enter your message...'
                  onChange={handleChange} 
                  value={formData.message}
                  ></textarea>
              </div>
              {formError && <p style={{ color: "red" }}>{formError}</p>}
              <div className='flex justify-center'>
                <button className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='submit'>
                  Send Message
                </button>
              </div>
            </form>

            {/* Calendly Integration */}
            <div className='my-8'>
              <h2 className='text-xl font-semibold text-center mb-4'>Schedule a Meeting</h2>
              <div className='calendly-inline-widget' data-url='https://calendly.com/your-calendly-link' style={{ minWidth: '320px', height: '630px' }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* Add this script tag to the bottom of your page to load Calendly widget */}
      <Script
        strategy="lazyOnload"
        src="https://assets.calendly.com/assets/external/widget.js"
      />
      </>
  );
};

export default Contact;
