import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (appointments, contacts, handleAppointments) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');

  const [currentContact, setCurrentContact] = useState('');

  const [date, setDate] = useState('');

  const [time, setTime] = useState('');























  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments}/>
      </section>
    </div>
  );
};
