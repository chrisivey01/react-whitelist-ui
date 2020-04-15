import axios from 'axios';

const closeEmployeeUrl = 'http://pma-joblisting/CloseEmployees'
const saveEmployeeUrl = 'http://pma-joblisting/SaveEmployees'


export function closeEmployees() {
    return axios.post(closeEmployeeUrl, {})
}

export function setEmployeesWhiteList(employee) {
    return axios.post(saveEmployeeUrl, employee)
}


