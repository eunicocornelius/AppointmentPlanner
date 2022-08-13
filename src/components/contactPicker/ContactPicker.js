import React from "react";

export const ContactPicker = ({onChange, contacts}) => {
  return (
    <select onChange={onChange}>
      <option value="">Select a Contact</option>
      {
        contacts.map((contact, index)=>{
          return <option value={contact.name} key={index}>{contact.name}</option>
        })
      }
    </select>
  );
};
