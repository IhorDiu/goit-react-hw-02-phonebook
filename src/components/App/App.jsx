import { Component } from 'react';
import { Title, AddForm, AddInput, AddButton, ContactForm} from './App.styled';




export class App extends Component {
  state = {
    contacts: [],
    name: '',
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
       <AddButton type="button">Add contact</AddButton>
        </AddForm>
        <ContactForm>
          <h2>Contacts</h2>
       <ul>
        <li>Rosie Simspon</li>
        <li>Hermiona Kline</li>
        <li>Eden Clements</li>
       </ul>
        </ContactForm>
       
        
      </div>
    );
  }
}
