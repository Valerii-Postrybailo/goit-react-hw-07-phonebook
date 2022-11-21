import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("сontacts/add");
const deleteContact = createAction("сontacts/delete");
const changeFilter = createAction("сontacts/changeFilter");

export default { addContact, deleteContact, changeFilter };