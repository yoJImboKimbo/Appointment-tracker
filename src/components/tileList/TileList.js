import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (contacts, appointment) => {

  console.log(contacts)

  let contactArry = contacts.contacts.contacts


  if (contacts) {
    console.log('contacts is true')
  } else if (appointment) {
    (console.log('appt is true'))
  }

  

  

  


  

  console.log(contactArry)

  const listingContacts = contactArry.map((e, i) => (

      <Tile contact={e} key={i}/>
            
  ))


  return(
    <div>
    {listingContacts}
    </div>
  )
  
};
