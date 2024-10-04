import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PhonebookSection from './PhonebookSection/PhonebookSection';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import PhonebookList from './PhonebookList/PhonebookList';
import PhonebookFilter from './PhonebookFilter/PhonebookFilter';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', contactName: 'Rosie Simpson', contactNumber: '459-12-56' },
      { id: 'id-2', contactName: 'Hermione Kline', contactNumber: '443-89-12' },
      { id: 'id-3', contactName: 'Eden Clements', contactNumber: '645-17-79' },
      { id: 'id-4', contactName: 'Annie Copeland', contactNumber: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onAddContact = ({ contactName, contactNumber }) => {
    this.setState(prevState => {
      if (this.isDubplicate(contactName)) {
        return alert(`${contactName} is alredy exist`);
      }
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        contactName,
        contactNumber,
      };

      return { contacts: [...contacts, newContact] };
    });
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(i => i.id !== id);

      return { contacts: newContacts };
    });
  };

  isDubplicate(newContactName) {
    const { contacts } = this.state;
    const normalizedNewContactName = newContactName.toLowerCase();
    const result = contacts.find(
      ({ contactName }) =>
        contactName.toLowerCase() === normalizedNewContactName
    );

    return Boolean(result);
  }

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
    const { onAddContact, onDeleteContact, getFilteredContacts, handleChange } =
      this;
    const contacts = getFilteredContacts();

    return (
      <>
        <PhonebookSection title="Phonebook">
          <PhonebookForm onSubmit={onAddContact} handleChange={handleChange} />
        </PhonebookSection>
        <PhonebookSection title="Contacts">
          <PhonebookFilter filter={filter} handleChange={handleChange} />
          <PhonebookList
            contacts={contacts}
            onDeleteContact={onDeleteContact}
          />
        </PhonebookSection>
      </>
    );
  }
}

export default Phonebook;
