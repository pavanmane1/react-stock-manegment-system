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
            Contact:
            <input type="text" name="contact" value={employeeData.contact} onChange={handleChange} />
          </label>
        </div>
        <button type='submit' className='submit_button'>
                            Register
                        </button>
                        <button type='button' className='submit_button'>
                            Cancel
                        </button>
      </div>
    </div>
  );
};

export default EmployeeScreen;
