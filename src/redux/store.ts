import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./slice/employees";
import companiesSlice from "./slice/companies";

const store = configureStore({
  reducer: {
    employees: employeesSlice,
    companies: companiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;

export default store;