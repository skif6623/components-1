import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PhonebookSection from './PhonebookSection/PhonebookSection';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import PhonebookList from './PhonebookList/PhonebookList';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', contactName: 'Rosie Simpson', contactNumber: '459-12-56' },
      { id: 'id-2', contactName: 'Hermione Kline', contactNumber: '443-89-12' },
      { id: 'id-3', contactName: 'Eden Clements', contactNumber: '645-17-79' },
      { id: 'id-4', contactName: 'Annie Copeland', contactNumber: '227-91-26' },
    ],
    filter: '',
  };

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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const result = contacts.filter(({ contactName, contactNumber }) => {
      return (
        contactName.toLowerCase().includes(filter) ||
        contactNumber.toLowerCase().includes(filter)
      );
    });

    return result;
  };
  render() {
    const { filter } = this.state;
    const { onAddContact, handleChange, getFilteredContacts } = this;
    const contacts = getFilteredContacts();

    return (
      <>
        <PhonebookSection title="Phonebook">
          <PhonebookForm onSubmit={onAddContact} />
        </PhonebookSection>
        <PhonebookSection title="Contacts">
          <input
            onChange={handleChange}
            type="text"
            name="filter"
            value={filter}
          />
          <PhonebookList contacts={contacts} />
        </PhonebookSection>
      </>
    );
  }
}

export default Phonebook;
