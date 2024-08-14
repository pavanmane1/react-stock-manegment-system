import React from 'react';
import './dashboard.css';

class App extends React.Component {
  state = {
    totalEmployees: 100,
    currentWorking: 85,
    absent: 15,
    shiftWise: {
      morning: 40,
      afternoon: 30,
      night: 15,
    },
    onlineServices: 45,
    offlineServices: 55,
    selectedDepartment: 'All',
    selectedShift: 'All',
  };

  handleDepartmentChange = (event) => {
    this.setState({ selectedDepartment: event.target.value });
  };

  handleShiftChange = (event) => {
    this.setState({ selectedShift: event.target.value });
  };

  render() {
    const {
      totalEmployees,
      currentWorking,
      absent,
      shiftWise,
      onlineServices,
      offlineServices,
      selectedDepartment,
      selectedShift,
    } = this.state;

    const employeeData = [
      {
        srNo: 1,
        employeeCode: 'EMP001',
        name: 'John Doe',
        department: 'IT',
        intime: '09:00 AM',
        outTime: '06:00 PM',
        lateTime: '10 minutes',
        overtime: '2 hours',
        status: 'Present',
      },
      // Add more employee data as needed
    ];

    const filteredEmployeeData = employeeData.filter((employee) => {
      if (selectedDepartment === 'All' && selectedShift === 'All') {
        return true;
      } else if (selectedDepartment === 'All') {
        return employee.department === selectedShift;
      } else if (selectedShift === 'All') {
        return employee.department === selectedDepartment;
      } else {
        return (
          employee.department === selectedDepartment && employee.intime.includes(selectedShift)
        );
      }
    });

    return (
      <div className="dashboard">
        <div className="cards-container">
          <div className="card">
            <h2>Total Employees</h2>
            <p>{totalEmployees}</p>
          </div>
          <div className="card">
            <h2>Current Working</h2>
            <p>{currentWorking}</p>
          </div>
          <div className="card">
            <h2>Absent</h2>
            <p>{absent}</p>
          </div>
          <div className="card">
            <h2>Shift Wise</h2>
            <p>Morning: {shiftWise.morning}</p>
            <p>Afternoon: {shiftWise.afternoon}</p>
            <p>Night: {shiftWise.night}</p>
          </div>
          <div className="card">
            <h2>Online Services</h2>
            <p>{onlineServices}</p>
          </div>
          <div className="card">
            <h2>Offline Services</h2>
            <p>{offlineServices}</p>
          </div>
        </div>

        <div className="filter-container">
          <label>
            Select Department:
            <select value={selectedDepartment} onChange={this.handleDepartmentChange}>
              <option value="All">All</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              {/* Add more department options as needed */}
            </select>
          </label>

          <label>
            Select Shift:
            <select value={selectedShift} onChange={this.handleShiftChange}>
              <option value="All">All</option>
              <option value="09:00 AM">Morning</option>
              <option value="01:00 PM">Afternoon</option>
              <option value="06:00 PM">Night</option>
              {/* Add more shift options as needed */}
            </select>
          </label>
        </div>

        <table className="employee-table">

          <thead>
            <tr>
              <th>Sr No</th>
              <th>Employee Code</th>
              <th>Name</th>
              <th>Department</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Late Time</th>
              <th>Overtime</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployeeData.map((employee) => (
              <tr key={employee.srNo}>
                <td>{employee.srNo}</td>
                <td>{employee.employeeCode}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.intime}</td>
                <td>{employee.outTime}</td>
                <td>{employee.lateTime}</td>
                <td>{employee.overtime}</td>
                <td>{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
