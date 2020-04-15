import React, { useState } from 'react';
import UsersJobs from './UsersJobs';
import * as apis from '../services/apis';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [showHideToggler, setShowHideToggler] = useState(false);

    window.addEventListener('message', event => {
        if (event.data.openWL) {
            setShowHideToggler(true);
            if (employees.length === 0){
                setEmployees(event.data.employees)
            }
        }
    })

    document.addEventListener('keydown', event => {
        if (event.keyCode === 27) {
            setShowHideToggler(false);
            apis.closeEmployees();
        }
    })

    const updateEmployee = (employeeData, employee) => {
        const index = employees.findIndex(emp => emp.identifier === employee.identifier)
        employees[index] = employee
        setEmployees([...employees]);
        apis.setEmployeesWhiteList(employee);
    }

    const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
      });

    return (
        <div className={ showHideToggler ? 'container' : 'hide-container' }>
            <ThemeProvider theme={darkTheme}>
                <UsersJobs 
                    employees={employees}
                    updateEmployee={updateEmployee} 
                    />
            </ThemeProvider>
        </div>
    )
}

export default App;
