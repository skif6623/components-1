import React from 'react';

const PhonebookList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, contactName, contactNumber }) => (
    <li key={id}>
      <p>
        {contactName}: {contactNumber}{' '}
        <button type="button" onClick={() => onDeleteContact(id)}>
          X
        </button>
      </p>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default PhonebookList;
