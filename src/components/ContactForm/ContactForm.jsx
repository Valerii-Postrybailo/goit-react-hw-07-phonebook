import React from 'react';
import { useState  } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

export default function ContactForm ({ onSubmit }){

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  // state = {
  //   name: '',
  //   number: '',
  // }

  const contactNameId = nanoid();
  const phoneNumberId = nanoid();

  const onNameInputChange = evt => {
    setName(evt.target.value)
  }

  const onNumberInputChange = evt =>{
    setNumber(evt.target.value)
  }


  const reset = () => {
    setName("");
    setNumber("");
    
  }

  const onSubmitChange = evt => {
    evt.preventDefault();
    onSubmit({name, number});
    reset();
  }

    return(
      <form onSubmit={onSubmitChange}>
        <label>
          Name{''}
            <input className={css.input}
              type="text"
              id={contactNameId}
              value={name}
              onChange={onNameInputChange}
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
              id={phoneNumberId}
              value={number}
              onChange={onNumberInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </label>

          <button type="submit">Add contact</button>

      </form>
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

