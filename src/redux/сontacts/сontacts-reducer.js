import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actionContacts from "./сontacts-actions";

function checkGetNewContact(state, payload) {
  const isEqualName = (payload) => {
    return state.find(({ name }) => name === payload.name);
  };

  if (!isEqualName(payload)) {
    const newContacts = [payload, ...state];

    return newContacts;
  } else {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
}

const items = createReducer([], {
  [actionContacts.addContact]: (state, { payload }) =>
    checkGetNewContact(state, payload),
  [actionContacts.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actionContacts.changeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({ items, filter });