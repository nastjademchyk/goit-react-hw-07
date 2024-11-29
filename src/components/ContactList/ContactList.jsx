import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import React from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts
    ? contacts.filter((contact) =>
        filter
          ? contact.name.toLowerCase().includes(filter.toLowerCase())
          : true
      )
    : [];

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li className={s.item} key={contact.id || contact.name}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
