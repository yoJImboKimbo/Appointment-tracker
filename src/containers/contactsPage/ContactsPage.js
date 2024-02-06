import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'

export const ContactsPage = (props) => {
  /*
  Defining state variables for 
  contact info and duplicate check
  */

  let [ name, setName ] = useState('');
  let [ phone, setPhone ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ dup, setDup ] = useState(false);

  //props extracted

  let contactList = props.contacts;
  let addContacts = props.addContacts

  /*
  console log tests

  console.log(contacts)
  contactList.forEach(e => console.log(e.name, e.phone, e.email))
  console.log(updateContacts)
  */

  //checks props contact array for current name being submit

  useEffect(() => {
   contactList.forEach(element => {
    if(name === element.name){
      setDup(true);
      console.log(`${name} is already taken`)
    } else { 
      setDup(false)
      console.log(`${name} is availabile`)
    }
   })
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(dup === false){
      addContacts({name: name, phone: phone, email: email})
      setName('');
      setPhone('');
      setEmail('');
      alert(`${name}, ${phone}, and ${email} is being added`)
    } else { alert('submission did not go through')}

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
