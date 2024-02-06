import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Defining state variables for 
  contacts and appointments 
  */

  let [ contacts, setContacts ] = useState([{name: 'carry', phone: 546, email: '123@email.com'}]);
  let [ appointments, setAppointments ] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  functions to add data to
  contacts and appointments with spread operator
  */

  let addContacts = (i) => {
   setContacts([i, ...i])
  };

  const addAppointments = (i) => {
    setAppointments([i, ...i])
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
             {/* Adding props to ContactsPage */}
            <ContactsPage contacts={contacts} addContacts={addContacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Adding props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointments={addAppointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
