import React, { useState } from 'react';
import './empdetail.css';

const EmployeeScreen = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeCode: '',
    name: '',
    department: '',
    joiningDate: '',
    retiredDate: '',
    basicSalary: '',
    contact: '',
    status: '',
    type: '',
    address: '',
    photo: '',
    sex: '',
    workingPeriod: '',
    adharcard: '',
    designation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="employee-screen">
      <div className="form-container">
        <div className="form-left">
          <h2>Employee Details</h2>
          <label>
            Employee Code:
            <input type="text" name="employeeCode" value={employeeData.employeeCode} onChange={handleChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={employeeData.name} onChange={handleChange} />
          </label>
          <label>
            Department:
            <input type="text" name="department" value={employeeData.department} onChange={handleChange} />
          </label>
          <label>
            Joining Date:
            <input type="date" name="joiningDate" value={employeeData.joiningDate} onChange={handleChange} />
          </label>
          <label>
            Retired Date:
            <input type="date" name="retiredDate" value={employeeData.retiredDate} onChange={handleChange} />
          </label>
          <label>
            Basic Salary:
            <input type="text" name="basicSalary" value={employeeData.basicSalary} onChange={handleChange} />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" value={employeeData.contact} onChange={handleChange} />
          </label>
        </div>
        <div className="form-right">
          <label>
            Status:
            <input type="text" name="status" value={employeeData.status} onChange={handleChange} />
          </label>
          <label>
            Type:
            <input type="text" name="type" value={employeeData.type} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={employeeData.address} onChange={handleChange} />
          </label>
          <label>
            Photo:
            <input type="file" name="photo" value={employeeData.photo} onChange={handleChange} />
          </label>
          <label>
            Sex:
            <input type="text" name="sex" value={employeeData.sex} onChange={handleChange} />
          </label>
          <label>
            Working Period:
            <input type="text" name="workingPeriod" value={employeeData.workingPeriod} onChange={handleChange} />
          </label>
          <label>
            Adharcard:
            <input type="text" name="adharcard" value={employeeData.adharcard} onChange={handleChange} />
          </label>
          <label>
            Designation:
            <input type="text" name="designation" value={employeeData.designation} onChange={handleChange} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmployeeScreen;
