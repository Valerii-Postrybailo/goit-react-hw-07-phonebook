import React from "react";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../redux/filterSlice';


export default function App() {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onInputChange = evt => {
    dispatch(setStatusFilter(evt.currentTarget.value));
  };

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column",
          fontSize: 20,
          color: '#010101'
        }}
      >

          <div>
            <h1 style={{textAlign: "center"}}>
              Phonebook
            </h1>

            <ContactForm />

            <h2 style={{textAlign: "center"}}>
              Contacts
            </h2>

            <Filter formSubmitHandler={onInputChange} filter={filter} />
            
            <ContactList/>
          </div>
      </div>
    );
}


