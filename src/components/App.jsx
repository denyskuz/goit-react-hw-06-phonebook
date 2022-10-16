import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import classes from "./App.module.css"
import Filter from "./Filter";
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, addFilter } from 'redux/contacts/actions';
import { getContacts, getFilter } from 'redux/contacts/selectors';


export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { name, number } = values;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts !!!`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  const handlerDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilter = value => {
    dispatch(addFilter(value))
  };

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
            <h1 className={classes.title}>PhoneBook</h1>
            <ContactForm onSubmit={handleSubmit} />
        </div>
        <div className={classes.container}>
          <h2 className={classes.title}>Contacts</h2>
          <Filter onHandleFilter={handleFilter} />
          <ContactList
            contacts={filterContacts}
            onDelete={handlerDelete}
            />
        </div>
      </div>
  )
}
