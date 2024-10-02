import React from 'react';

const PhonebookList = ({ contacts }) => {
  const elements = contacts.map(({ id, contactName, contactNumber }) => (
    <li key={id}>
      <p>
        {contactName}: {contactNumber}
      </p>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default PhonebookList;
