import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */


  const example1 = {name: 'Mike', phone: 999, email: 'email@email.com'};
  const example2 = {name: 'Doom', phone: 555, email: 'email@aol.com'};
  const example3 = {name: 'Sally', phone: 111, email: 'email@yahoo.com'};

  const apptExample = {title: 'title', contact: 'contact', date: 'date', time: 'time'}


  const [appointments, setAppointments] = useState([apptExample]);
  const [contacts, setContacts] = useState([example1, example2, example3]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  let handleContacts = (name, phone, email) => {
    let newContact = {name: name, phone: phone, email: email};

    setContacts(prev => [...prev, newContact]);
  };

  let handleAppointments = (title, contact, date, time) => {
    let newAppointment = {title: title, contact: contact, date: date, time: time};

    setAppointments(prev => [...prev, newAppointment]);
  };



  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} handleContacts={handleContacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} handleAppointments={handleAppointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
