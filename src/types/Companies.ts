

export type Company = {
    id: string,
    title: string,
    employeesQuenty: number;
    address: string,
    checked: boolean
}
export type CompanyId = Company["id"]
export type InitialCompany = {
    companies: Company[]
}