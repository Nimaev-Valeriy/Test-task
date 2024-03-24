import { Company, CompanyId} from "../types/Companies";
import { Employees } from "../types/Employees";

function EmployeTable({
  employee,
  company
}: {
  employee: Employees[];
  company: CompanyId
}) {

  return (
    <>
      <table border={1} align="center" cellPadding={10}>
        <thead>Сотрудники</thead>
        <tbody>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Должность</th>
            <th>Выбрать Все</th>
          </tr>
          {employee
            .filter((el) => el.company === company)
            .map((employe) => {
              return (
                <tr key={employe.id}>
                  <td>{employe.firtsName}</td>
                  <td>{employe.lastName}</td>
                  <td>{employe.post}</td>
                  <td>
                    <input type="checkbox" />
                    {employe.checked}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default EmployeTable;
