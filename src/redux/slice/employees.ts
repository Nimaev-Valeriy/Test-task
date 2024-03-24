import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Employees,InitialEmployees } from "../../types/Employees";

export const initialEmployees: InitialEmployees = {
  employees: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState: initialEmployees,
  reducers: {
    getEmployees: (
      state: InitialEmployees,
      action: PayloadAction<Employees[]>
    ) => {
      return {
        ...state,
        employees: action.payload,
      };
    },
    addEmployee:(state: InitialEmployees, action: PayloadAction<Employees>) => {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }
  },
});

export const { getEmployees, addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
