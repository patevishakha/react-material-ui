const KEYS ={
    employees:'employees',
    switchId:'switchId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: '11' },
    { id: '2', title: '12' },
    { id: '3', title: '103' },
    { id: '4', title: '104' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateswitchId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateswitchId() {
    if (localStorage.getItem(KEYS.switchId) == null)
        localStorage.setItem(KEYS.switchId, '0')
    var id = parseInt(localStorage.getItem(KEYS.switchId))
    localStorage.setItem(KEYS.switchId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}