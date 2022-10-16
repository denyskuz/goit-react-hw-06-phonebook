import { createAction, nanoid } from '@reduxjs/toolkit';

const prepareContact = ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const addContact = createAction('contacts/add', prepareContact);
const deleteContact = createAction('contacts/delete');
const addFilter = createAction('contacts/filter');

export { addContact, deleteContact, addFilter };