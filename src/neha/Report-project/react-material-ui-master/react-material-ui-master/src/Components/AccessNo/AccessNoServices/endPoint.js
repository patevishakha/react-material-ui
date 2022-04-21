const KEYS ={
    employees:'employees',
    endId:'endId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: '202' },
    { id: '2', title: '203' },
    { id: '3', title: '204' },
    { id: '4', title: '205' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateendId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateendId() {
    if (localStorage.getItem(KEYS.endId) == null)
        localStorage.setItem(KEYS.endId, '0')
    var id = parseInt(localStorage.getItem(KEYS.endId))
    localStorage.setItem(KEYS.endId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}