import React from "react";
import { useState, useEffect } from "react";

export const ContactsPage = (contacts, addContacts) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  let [ name, setName ] = useState('');
  let [ phone, setPhone ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ dup, setDup ] = useState('');

  let contactList = contacts.contacts;
  

  useEffect(() => {
   contactList.forEach(element => {
    console.log(element)
   })
   console.log(addContacts)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(dup === false){
      addContacts({name: name, phone: phone, email: email})
    }

    setName('');
    setPhone('');
    setEmail('');

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
