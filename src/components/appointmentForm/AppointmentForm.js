import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={({target})=>setTitle(target.value)} value={title}/>
      <input type="date" onChange={({target})=>setDate(target.value)} value={date}/>
      <input type="time" onChange={({target})=>setTime(target.value)} value={time}/>
      <ContactPicker onChange={({target})=>setContact(target.value)} contacts={contacts} value={contact}/>
      <input type="submit"/>
    </form>
  );
};
