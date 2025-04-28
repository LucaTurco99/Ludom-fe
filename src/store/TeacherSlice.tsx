import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeachersFormState {
  value: {
    firstName: string;
    lastName: string;
  };
}

const initialState: TeachersFormState = {
  value: {
    firstName: "",
    lastName: "",
  },
};

const teachersFormSlice = createSlice({
  name: "teachersForm",
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ name: string; value: string }>) => {
      const { name, value } = action.payload;
      state.value[name as keyof TeachersFormState["value"]] = value;
    },
    resetForm: (state) => {
      state.value = initialState.value;
    },
    saveForm: (state, action: PayloadAction<TeachersFormState["value"]>) => {
      state.value = action.payload; // Save the new TeachersFormState object
    },
  },
});

export const { updateField, resetForm, saveForm } = teachersFormSlice.actions;
export default teachersFormSlice.reducer;