import React, { useMemo, useEffect, useState } from 'react'
import { MaterialReactTable } from "material-react-table";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './DataGrid.css';

const DataGrid = () => {
    var [userData, setUserData] = useState([]);
    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        }),
    )
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
                const res = await response.json();
                const initialData = res.data.slice(0, 6);
                setUserData(initialData);
                var employeesDataString = JSON.stringify(res.data);
                localStorage.setItem('Emp_Data', employeesDataString);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Check if data is not already loaded before making the API call
        if (userData.length === 0) {
            fetchData();
        }
    }, [userData]);
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'ID',
                size: 5,
            },
            {

                accessorKey: 'employee_name',
                header: 'Name',
                size: 30,
            },
            {

                accessorKey: 'employee_age', //normal accessorKey

                header: 'Age',
                size: 3,
            },
            {

                accessorKey: 'employee_salary',
                header: 'Salary',
                size: 10,
            },
        ],[]
    );
    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const insertRow = () => {
        const newTempId = randomIntFromInterval(7, 24);
        var storedEmployeesDataString = localStorage.getItem('Emp_Data');

        // Convert the JSON string back to an object
        var storedEmployeesData = JSON.parse(storedEmployeesDataString);
        var employeeDetails = storedEmployeesData.find(employee => employee.id === newTempId);
        setUserData([employeeDetails, ...userData]);
    };

    const removeRow = (tempId) => {
        const updatedData = userData.slice(1, userData.length);
        setUserData(updatedData);
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className="header">
                    <span className="title">User Information</span>
                    <div className="button-container">
                        <button onClick={insertRow}>Insert Row</button>
                    </div>
                    <div className="button-container">
                        <button onClick={() => removeRow(15)}>Remove Row</button>
                    </div>
                </div>
                <MaterialReactTable columns={columns} data={userData} />
            </ThemeProvider>
        </div>
    )
}

export default DataGrid