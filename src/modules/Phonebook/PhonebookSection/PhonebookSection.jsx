import React from 'react';

const PhonebookSection = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default PhonebookSection;
