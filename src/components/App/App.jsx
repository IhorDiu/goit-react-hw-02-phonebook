import { Component } from 'react';
import { Title, AddForm, AddInput, AddButton, ContactForm } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <div>
        <Title>Phonebook</Title>
        <AddForm>
          <h2>Name</h2>
          <AddInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h2>Number</h2>
          <AddInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <AddButton type="button">Add contact</AddButton>
        </AddForm>
        <ContactForm>
          <h2>Contacts</h2>
          <ul>
            <li>Rosie Simspon: 645-17-79</li>
            <li>Hermiona Kline: 443-89-12</li>
            <li>Eden Clements: 459-12-56</li>
          </ul>
        </ContactForm>
      </div>
    );
  }
}
