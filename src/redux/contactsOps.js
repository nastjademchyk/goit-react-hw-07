import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInprogress, fetchSuccess, fetchError } from "./contactsSlice";

axios.defaults.baseURL = "https://67487a0d5801f51535911236.mockapi.io/";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchInprogress());
    const response = await axios.get("/contacts");
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
export const addContact = () => {};
export const deleteContact = () => {};
