import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Company, CompanyId, InitialCompany } from "../../types/Companies";

export const InitialCompanies: InitialCompany = {
  companies: [],
};

const companiesSlice = createSlice({
  name: "companies",
  initialState: InitialCompanies,
  reducers: {
    getCompanies: (state: InitialCompany, action: PayloadAction<Company[]>) => {
      return {
        ...state,
        companies: action.payload,
      };
    },
    checkCompanies: (
      state: InitialCompany,
      action: PayloadAction<CompanyId>
    ) => {
      const checkCompanies = state.companies.map((company) => {
        if (company.id === action.payload) {
          return { ...company, checked: !company.checked };
        } else {
          return { ...company, checked: false };
        }
      });

      return {
        ...state,
        companies: checkCompanies,
      };
    },
  },
});

export const { getCompanies, checkCompanies } = companiesSlice.actions;
export default companiesSlice.reducer
