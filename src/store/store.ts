import { configureStore } from "@reduxjs/toolkit";
import teachersFormReducer from "./TeacherSlice";

export const store = configureStore({
  reducer: {
    teachersForm: teachersFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;