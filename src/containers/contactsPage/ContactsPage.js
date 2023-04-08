import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList"



export const ContactsPage = (contacts) => {
  
  /*
  Define state variables for 
  contact info and duplicate check
  */
  let contactsArray = contacts.contacts;

  console.log(contactsArray + ' ContactsPage contacts')

  const [name, setName] = useState('');
  
  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');

  const [duplicate, setDuplicate] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

      if(!duplicate){

        console.log('contact is good to go')
        console.log(name, phone, email + ' <<< Contact submission')

        contacts.handleContacts(name, phone, email)

        // Reset values for next entry

    } else {

      console.log('couldnt process submit because of duplicate')
      alert('Name is duplicate, please enter a different name: ')
    
    
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    
    contactsArray.forEach(element => {
      if(element.name.toLowerCase() === name.toLowerCase()){

        setDuplicate(true);
        console.log('Duplicate set to true')
        console.log('duplicate name: ' + element.name + ' versus ' + name);

      } else { console.log('unique name: ' + element.name + ' versus ' + name) }
    });
  }, [name]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email} setName={setName} setEmail={setEmail} setPhone={setPhone} handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
