import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import initialContacts from 'components/data.json';
import { Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = newContact => {
    this.setState(preState => {
      return {
        contacts: [...preState.contacts, newContact],
      };
    });
  };

  findContact = e => {
    this.setState({ filter: e.target.value });
  };

  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const filterValue = filter.toLowerCase();

    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contacts;
  };
  

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.findContact} />
        <ContactList contacts={this.onFilterContacts} />
      </div>
    );
  }
}
