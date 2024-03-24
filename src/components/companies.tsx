// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCompanies } from "../redux/slice/companies";
// import { companies } from "../data/company";
// import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { Company, CompanyId } from "../types/Companies";
import { checkCompanies } from "../redux/slice/companies";
import { Employees } from "../types/Employees";
import { useState } from "react";
import AddForm from "./addForm";
 

function CompaniesTable({company,employe}: {company: Company[], employe: Employees[]}) {
    const dispath = useDispatch()
    function handleCheckAll(id:CompanyId) {
      dispath(checkCompanies(id));
    }
    const [addForm, setAddForm] = useState<boolean>(false)
    return (
      <>
        <table border={1} align="center" cellPadding={10}>
          <thead>Компании</thead>
          <tbody>
            <tr>
              <th>Название</th>
              <th>Кол-во сотрудников</th>
              <th>Адрес</th>
              <th>Выбрать Все</th>
            </tr>
            {company.map((company) => {
              return (
                <tr
                  key={company.id}
                  style={
                    company.checked ? { color: "blue" } : { color: "black" }
                  }
                >
                  <td>{company.title}</td>
                  <td>{company.employeesQuenty}</td>
                  <td>{company.address}</td>
                  <td>
                    <input
                      type="checkbox"
                      onClick={() => handleCheckAll(company.id)}
                    />
                    {company.checked}
                  </td>
                </tr>
              );
            })}
          </tbody>
        <button onClick={()=>setAddForm(true)}>
          Добавить сотрудника
        </button>
        </table>
         {addForm && <div style={{display:'flex', justifyContent:'center'}}>
          <AddForm/>
          <button onClick={()=>setAddForm(false)}>X</button>
         </div> }   
      </>
    );
}

export default CompaniesTable;