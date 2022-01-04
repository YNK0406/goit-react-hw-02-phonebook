import React from "react";
import PropTypes from 'prop-types';
import s from './Contact.module.scss'

const ContactList = ({contacts, onDeleteContact}) => (
<ul className={s.ContactList}>
   {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.ContactList__item}>
         <p>{name}:{number}</p>
         <button onClick={()=>onDeleteContact(id)}>delete</button>
      </li>
   ))
   };
</ul>
);
ContactList.propTypes = {
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   onDeleteContact: PropTypes.func.isRequired,
 };
export default ContactList;