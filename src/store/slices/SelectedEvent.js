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
    reorderRegistrations: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const updated = [...state];
      const [movedItem] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, movedItem);
      localStorage.setItem("registrations", JSON.stringify(updated));
      return updated;
    },
  },
});

export const {
  setSelectedEvent,
  removeRegistration,
  deleteAll,
  reorderRegistrations,
} = SelectedEventSlice.actions;
export default SelectedEventSlice.reducer;
