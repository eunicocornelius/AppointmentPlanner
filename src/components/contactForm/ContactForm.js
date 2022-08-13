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
      <input type="text" onChange={({target})=>{setName(target.value)}} value={name}/> 
      <input type="tel" onChange={({target})=>{setPhone(target.value)}} value={phone} pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"/> 
      <input type="email" onChange={({target})=>{setEmail(target.value)}} value={email}/> 
      <input type="submit"/>
    </form>
  );
};
