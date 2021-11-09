import React from 'react';
import './table.css';
const TableHader = () => {
    return(
        <thead className="Table-header">
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return(
        <tbody className="Table-body">
            <tr>
                <td>Ram</td>
                <td>Engineer</td>
            </tr>
            <tr>
                <td>Ammu</td>
                <td>Actor</td>
            </tr>
            <tr>
                <td>Sara</td>
                <td>Doctor</td>
            </tr>
            <tr>
                <td>Tom</td>
                <td>Police</td>
            </tr>
        </tbody>
    )
}

class Table extends React.Component{
    render(){
    return (
        <table className="Table">
        <TableHader />
        <TableBody /> 
        </table>
    )
}
}

export default Table;
