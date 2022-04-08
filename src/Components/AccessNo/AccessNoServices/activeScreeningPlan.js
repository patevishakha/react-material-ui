const KEYS ={
    employees:'employees',
    screeningPlan:'screeningPlan'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: '202' },
    { id: '2', title: '203' },
    { id: '3', title: '204' },
    { id: '4', title: '205' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generatescreeningPlan()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generatescreeningPlan() {
    if (localStorage.getItem(KEYS.screeningPlan) == null)
        localStorage.setItem(KEYS.screeningPlan, '0')
    var id = parseInt(localStorage.getItem(KEYS.screeningPlan))
    localStorage.setItem(KEYS.screeningPlan, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}