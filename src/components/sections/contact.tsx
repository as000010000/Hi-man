import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-lg">
        Have questions or want to get in touch?
        <a href="mailto:hi@snowbasestudio.com" className="text-blue-500 hover:underline ml-2">
          Email Us
        </a>
      </p>
    </section>
  );
};

export default ContactSection;
