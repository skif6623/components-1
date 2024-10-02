import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PhonebookSection from './PhonebookSection/PhonebookSection';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import PhonebookList from './PhonebookList/PhonebookList';

export class Phonebook extends Component {
  state = { contacts: [] };

  onAddContact = ({ contactName, contactNumber }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        contactName,
        contactNumber,
      };

      return { contacts: [...contacts, newContact] };
    });
  };

  render() {
    const { contacts } = this.state;
    const { onAddContact } = this;

    return (
      <>
        <PhonebookSection title="Phonebook">
          <PhonebookForm onSubmit={onAddContact} />
        </PhonebookSection>
        <PhonebookSection title="Contacts">
          <PhonebookList contacts={contacts} />
        </PhonebookSection>
      </>
    );
  }
}

export default Phonebook;
