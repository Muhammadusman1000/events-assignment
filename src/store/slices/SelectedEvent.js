import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("registrations")) || [];

const SelectedEventSlice = createSlice({
  name: "selectedEvent",
  initialState,
  reducers: {
    setSelectedEvent: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("registrations", JSON.stringify(state));
    },
    removeRegistration: (state, action) => {
      const next = state.splice(action.payload, 1);
      localStorage.setItem("registrations", JSON.stringify(next));
    },
    deleteAll: (state) => {
      localStorage.removeItem("registrations");
      return [];
    },
  },
});

export const { setSelectedEvent, removeRegistration, deleteAll } =
  SelectedEventSlice.actions;
export default SelectedEventSlice.reducer;
