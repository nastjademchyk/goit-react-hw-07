import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleReject);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, handleReject);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    });
    builder.addCase(deleteContact.rejected, handleReject);
  },
});

export const { fetchInprogress, fetchSuccess, fetchError } = slice.actions;
export const selectContacts = (state) => state.contacts.items;

export default slice.reducer;
