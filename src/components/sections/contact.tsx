import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg mb-4">
        Have questions or want to get in touch?
        <a href="mailto:hi@snowbasestudio.com" className="text-blue-500 hover:underline ml-2">
          Email Us
        </a>
      </p>
      <p className="text-lg">
        You can also reach us by phone at <span className="font-semibold">+1 (123) 456-7890</span>. We typically respond within 24 business hours.
      </p>
    </section>
  );
};

export default ContactSection;
