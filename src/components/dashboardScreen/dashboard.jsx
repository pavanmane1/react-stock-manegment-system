import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [importexport, setImportexport] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    // Fetch products from the API when the component mounts
    // fetchProducts();
    // fetchDailyTransactions();
    // Importexport();

  }, []); // Empty dependency array ensures this effect runs only once on mount

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get('http://192.228.1.20:8081/api/users/products');
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     setTransactions([]); // Set transactions to an empty array in case of an error
  //   }
  // };

  // const Importexport = async () => {
  //   try {
  //     const response = await axios.get('http://192.228.1.20:8081/api/users/totalimportexport');
  //     setImportexport(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     setImportexport([]);
  //   }
  // };

  // const importexportbydate = async () => {
  //   try {
  //     const response = await axios.get(`http://192.228.1.20:8081/api/users//totalimportexportbydate?startDate=${startDate}&endDate=${endDate}`);
  //     setImportexport(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     setImportexport([]);
  //   }
  // };

  // const fetchDailyTransactions = async () => {
  //   try {
  //     const response = await axios.get('http://192.228.1.20:8081/api/users/dayilytransactions');
  //     setTransactions(response.data);
  //   } catch (error) {
  //     console.error('Error fetching daily transactions:', error);
  //     setTransactions([]); // Set transactions to an empty array in case of an error
  //   }
  // };

  // const fetchTransactions = async (employeeId, productId) => {
  //   try {
  //     const url = `http://192.228.1.20:8081/api/users/transactions?employeeId=${employeeId}&productId=${productId}`;
  //     const response = await axios.get(url);
  //     setTransactions(response.data);
  //   } catch (error) {
  //     console.error('Error fetching transactions:', error);
  //     setTransactions([]); // Set transactions to an empty array in case of an error
  //   }
  // };

  const handleSelectedEmployee = (event) => {
    const selectedEmployeeValue = event.target.value;
    setSelectedEmployee(selectedEmployeeValue);
  };

  const handleSelectedProduct = (event) => {
    const selectedProductValue = event.target.value;
    setSelectedProduct(selectedProductValue);
    // fetchTransactions(selectedEmployee, selectedProductValue);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // const handleDownload = async () => {
  //   try {
  //     importexportbydate ();
  //     const url = `http://192.228.1.20:8081/api/users/fromtoenddatetransaction?startDate=${startDate}&endDate=${endDate}`;
  //     const response = await axios.get(url);
  //     setTransactions(response.data);
  //   } catch (error) {
  //     console.error('Error fetching transactions:', error);
  //     setTransactions([]); // Set transactions to an empty array in case of an error
  //   }
  // };

  return (
    <div className="dashboard">
      <div className="cards-container">
        <div className="card">
          <h2>Import</h2>
          {importexport.map((Import) => (
            <p>
              {Import.total_import}
            </p>
          ))}
        </div>
        <div className="card">
          <h2>Export</h2>
          {importexport.map((Export) => (
            <p>
              {Export.total_export}
            </p>
          ))}
        </div>
      </div>

      <div className="filter-container">
        <label>Employee :</label>
        <select value={selectedEmployee} onChange={handleSelectedEmployee}>
          <option value="">Select</option>
          <option value="10797b13-f63b-4712-bc75-f773e41c33e6">Ram</option>
          <option value="2c4b6d0e-16c3-4e10-a7b7-b8f802812d8d">Harman</option>
          <option value="cf8dcbad-4739-453b-86e8-87876064e94f">Sid P</option>
          <option value="f1992c73-6a69-4573-96f8-b40fe064eca2">aashvain M </option>
          {/* Add more options as needed */}
        </select>

        <label>
          Product :
          <select value={selectedProduct} onChange={handleSelectedProduct}>
            <option value="">Select</option>
            {products.map((product) => (
              <option key={product.product_id} value={product.product_id}>
                {product.product_name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Start Date :
          <input type="date" value={startDate} onChange={handleStartDateChange} />
        </label>

        <label>
          End Date :
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </label>

        {/* <button onClick={handleDownload}>Show Transaction</button> */}
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Transaction Date</th>
            <th>Employee Name</th>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Quantity</th>
            <th>Transaction Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.transaction_id}>
                <td>{new Date(transaction.transaction_date).toLocaleDateString()}</td>
                <td>{transaction.emp_name}</td>
                <td>{transaction.product_name}</td>
                <td>{transaction.product_category}</td>
                <td>{transaction.quantity}</td>
                <td>{transaction.transaction_type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">There are No Transactions yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
