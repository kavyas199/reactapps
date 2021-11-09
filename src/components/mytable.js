import React from 'react';
import './mytable.css';
const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>City</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody className="table-body">{rows}</tbody>
  }

  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table className="table">
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Anu',
          job: 'Software Engineer',
          city: 'Kochi'
        },
        {
          name: 'Arya',
          job: 'Actor',
          city:'Pune'
        },
        {
          name: 'Raju',
          job: 'Artist',
          city:'Trivandrum'
        },
        {
          name: 'Ram',
          job: 'Manager',
          city:'Banglore'
        },
        {
          name: 'Yadu',
          job: 'Doctor',
          city:'Chennai'
        },
        {
          name: 'Mini',
          job: 'System Engineer',
          city:'Delhi'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;