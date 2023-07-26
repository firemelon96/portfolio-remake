'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      toast.success('Send Successfully');
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error(`Failed to send: ${error}`);
    }
  };

  return (
    <div className='h-screen pt-10' id='contact'>
      <h1 className='title md:mb-28'>Leave a message</h1>
      <div className='flex mb-20 items-center justify-center flex-col md:flex-row gap-11'>
        <div className=''>
          <Image
            alt='profile'
            width={300}
            height={300}
            src='/e.png'
            className='rounded-full w-auto h-auto'
          />
        </div>
        <form className='' onSubmit={submit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-600 dark:text-slate-200'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-slate-700'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-600 dark:text-slate-200'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block text-gray-600 dark:text-slate-200'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
              placeholder='Your Message'
              required
            ></textarea>
          </div>
          <button
            disabled={isSubmitting}
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
