import { useDispatch, useSelector } from "react-redux";
import CompaniesTable from "./components/companies";
import EmployeTable from "./components/employees";
import { useEffect } from "react";
import { getCompanies } from "./redux/slice/companies";
import { companies } from "./data/company";
import { RootState } from "./redux/store";
import { getEmployees } from "./redux/slice/employees";
import { employees } from "./data/employees";


function App() {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getCompanies(companies));
    dispath(getEmployees(employees))
  }, []);

  const company = useSelector((store: RootState) => store.companies.companies);
  const employee = useSelector((store: RootState) => store.employees.employees);
  console.log("employee",employee);
  
  
  return (
      <div>
        <CompaniesTable company={company} employee={employee}/>
        {company.map((el) => {
          return (
            el.checked === true &&  (
              <EmployeTable employee={employee} company={el.id} />
            )
          );
        })}
      </div>
  );
}

export default App;
