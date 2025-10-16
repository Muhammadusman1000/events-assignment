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
  },
});

export const { setSelectedEvent } = SelectedEventSlice.actions;
export default SelectedEventSlice.reducer;
