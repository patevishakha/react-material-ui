const KEYS ={
    employees:'employees',
    countryOrigin :'countryOrigin'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'AUS' },
    { id: '2', title: 'IND' },
    { id: '3', title: 'EUR' },
    { id: '4', title: 'US' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generatecountryOrigin()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generatecountryOrigin() {
    if (localStorage.getItem(KEYS.countryOrigin) == null)
        localStorage.setItem(KEYS.countryOrigin, '0')
    var id = parseInt(localStorage.getItem(KEYS.countryOrigin))
    localStorage.setItem(KEYS.switchId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}