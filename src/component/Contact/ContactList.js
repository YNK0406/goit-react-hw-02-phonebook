import React from "react";
// import s from './Contact.module.scss'

const ContactList = ({contacts}) => (
<ul>
   {contacts.map(({ id, name, number }) => (
      <li key={id}>
         <p>{name}:{number}</p>
         <button>delete</button>
      </li>
   ))
   };
</ul>
);

export default ContactList;