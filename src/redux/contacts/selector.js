import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selector";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectIsError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
