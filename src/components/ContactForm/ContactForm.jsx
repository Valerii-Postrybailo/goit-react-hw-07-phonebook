import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

export default class ContactForm extends React.Component{

  state = {
    name: '',
    number: '',
  }

  contactNameId = nanoid();
  phoneNumberId = nanoid();

  handleInputChange = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  

  reset = () => {
    this.setState({name:'', number: ''})
  }

  onSubmitChange = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }


  render() {
    return(
      <form onSubmit={this.onSubmitChange}>
        <label>
          Name{''}
            <input className={css.input}
              type="text"
              id={this.contactNameId}
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </label>

        <label>
          Number{''}
            <input className={css.input}
              type="tel"
              name="number"
              id={this.phoneNumberId}
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </label>

          <button type="submit">Add contact</button>

      </form>
    )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

