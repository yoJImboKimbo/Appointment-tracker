import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (

    
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <label>Phone:</label>
        <input type='tel' value={phone} onChange={e => setPhone(e.target.value)}></input>
        <label>Email:</label>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
        <input type="submit" value="Submit"></input>
      </form>

  );
};
