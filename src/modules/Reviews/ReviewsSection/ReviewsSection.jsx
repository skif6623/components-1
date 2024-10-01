import React from 'react';

const ReviewsSection = ({ title, children }) => {
  return (
    <>
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
};

export default ReviewsSection;
