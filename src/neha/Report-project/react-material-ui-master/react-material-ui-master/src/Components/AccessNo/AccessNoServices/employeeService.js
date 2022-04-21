const KEYS ={
    employees:'employees',
    employeeService:'employeeService'
}

export function getDepartmentCollection() {
    return ([
        { id: '1', title: '1' },
        { id: '2', title: '102' },
        { id: '3', title: '103' },
        { id: '4', title: '104' },
    ]);
}

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateemployeeService()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateemployeeService() {
    if (localStorage.getItem(KEYS.employeeService) == null)
        localStorage.setItem(KEYS.employeeService, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeService))
    localStorage.setItem(KEYS.employeeService, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
     return JSON.parse(localStorage.getItem(KEYS.employees));
   
    
    }
