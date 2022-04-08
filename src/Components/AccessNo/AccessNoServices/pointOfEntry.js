const KEYS ={
    employees:'employees',
    entryId:'entryId'
}

export const getDepartmentCollection = ()=> ([
        { id: '1', title: '101' },
        { id: '2', title: '102' },
        { id: '3', title: '103' },
        { id: '4', title: '104' },
    ]);


export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateentryId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateentryId() {
    if (localStorage.getItem(KEYS.entryId) == null)
        localStorage.setItem(KEYS.entryId, '0')
    var id = parseInt(localStorage.getItem(KEYS.entryId))
    localStorage.setItem(KEYS.entryId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}