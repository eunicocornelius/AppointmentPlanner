import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  
  // Extract props variables
  const contacts = props.contacts;
  const addContacts = props.addContacts;

  // Declare useState for each variables
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nameDupe, setNameDupe] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!nameDupe){
      addContacts(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
    else{
      setNameDupe(false);
      alert('Name already existed!');
    }
  };

  
  useEffect( () => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setNameDupe(true);
      }
      else{

        return;
      }
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          phone={phoneNumber}
          email={email}
          setName={setName}
          setPhone={setPhoneNumber}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts}/>
      </section>
    </div>
  );
};
