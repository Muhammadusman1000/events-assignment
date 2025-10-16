import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./slices/EventSlice";
import selectedEventSlice from "./slices/SelectedEvent";

const store = configureStore({
  reducer: {
    events: eventSlice,
    selectedEvent: selectedEventSlice,
  },
});
export default store;
