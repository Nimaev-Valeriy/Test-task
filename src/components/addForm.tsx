import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { v4 as uuidv4} from "uuid"
import { addEmployee } from "../redux/slice/employees";
function AddForm() {
     const company = useSelector(
       (store: RootState) => store.companies.companies
     );
    const [firtsName, setFirtsName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [post, setPost] = useState<string>("");
    const [companies, setCompanies] = useState<string>("");
    const dispatch = useDispatch()
    function handlerAddEmployer(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const id = uuidv4()
        dispatch(
          addEmployee({ id, firtsName, lastName, post, company: companies ,checked:false})
        );
        
    }
    return (
      <form onSubmit={handlerAddEmployer}>
        <input
          type="text"
          placeholder="Имя сотрудника"
          value={firtsName}
          onChange={(e) => setFirtsName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фамилия сотрудника"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Должность сотрудника"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <select
          value={companies}
          onChange={(e) => setCompanies(e.target.value)}
        >
          {company.map((el) => {
            return (
              <option key={el.id} value={el.id}>
                {el.title}
              </option>
            );
          })}
        </select>
        <button type="submit">+</button>
      </form>
    );
}

export default AddForm;