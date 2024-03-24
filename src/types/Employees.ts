import { CompanyId } from "./Companies"

export type Employees = {
    id: string,
    lastName: string,
    firtsName: string,
    post: string,
    company: CompanyId,
    checked: boolean
}
export type EmployeesAdd = Omit<Employees, 'id'>

export type InitialEmployees = {
    employees: Employees[]
}