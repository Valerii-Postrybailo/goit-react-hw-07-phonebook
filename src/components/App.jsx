import React from "react";
import { useState, useEffect  } from "react";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid'

export default function App() {
  
  const [contacts, setContact] = useState(
    () => JSON.parse(window.localStorage.getItem('data')) ?? []
    // [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ]
  )

  const[filter, setFilter] = useState('')

  // state = {
  //   contacts: [
  //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ],

  //   filter: '',
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //     console.log("Updata")
  //     if (this.state.contacts !== prevState.contacts){
  //       localStorage.setItem("data", JSON.stringify(this.state.contacts))
  //     }
  // }

  const handleInputChange = evt => {
    setFilter(evt.currentTarget.value);
  }


  const formSubmitHandler = data =>{
    
    data.id = nanoid()
    console.log(data)
    // localStorage.setItem(`${data.name}`, JSON.stringify(data))

    const checkContact = contacts.find(contact => contact.name === data.name)
    
    checkContact 
      ? alert(`${data.name} is already in the contacts`)
      : setContact( [...contacts, data])

      // onFilterContact()
  }

  const onRemoveContact = (contactId) => {
    setContact(prevContact =>
      prevContact.filter(contact => contactId !== contact.id)
    )
  }

  const onFilterContact = () => {
    const contactToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactToLowerCase)
    )
  }


  // useEffect(() => {
  //   const contactData = localStorage.getItem("data")
  //   const parsedUserContact = JSON.parse(contactData)
  //   console.log(parsedUserContact)
  //   setContact(parsedUserContact)
  // }, []);


  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contacts))
    console.log(contacts)
  }, [contacts]);



  // componentDidMount() {
  //   const contactData = localStorage.getItem("data")
  //   const parsedUserContact = JSON.parse(contactData)
  //   console.log(parsedUserContact)

  //   if(parsedUserContact !== null){
  //     this.setState({contacts:parsedUserContact})
  //   }
  // }

  const filterContact = onFilterContact()

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

              <ContactForm  
                onSubmit = {formSubmitHandler}
              />

            <h2>Contacts</h2>

              <Filter 
                formSubmitHandler= {handleInputChange}
                filter={filter}
              />

              <ContactList
                onRemoveContact = {onRemoveContact}
                filteredContacts = {filterContact}
              />

          </div>
      </div>
    );
}

