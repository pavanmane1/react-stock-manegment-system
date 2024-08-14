// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './transaction.css';
// import swal from 'sweetalert';
// import axios from 'axios';

// const Transaction = () => {
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in the format YYYY-MM-DD
//     const [products, setProducts] = useState([]);

//     const [formSubmission, setFormSubmission] = useState({
//         date: today,
//         employee: "",
//         product: "",
//         quantity: "",
//         transactionType: "import" // Default value for radio button
//     });

//     const handleInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setFormSubmission({ ...formSubmission, [name]: value });
//     };

//     useEffect(() => {
//         // Fetch product types from the API
//         axios.get('http://192.228.1.20:8081/api/users/products')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching product types:', error);
//             });

//     }, []); // Run this effect only once on component mount

//     const handleRadioChange = (e) => {
//         const value = e.target.value;
//         setFormSubmission({ ...formSubmission, transactionType: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Assuming your API endpoint is correct and you want to use axios
//         // Make sure to handle the API endpoint appropriately
//         axios.post("http://192.228.1.20:8081/api/users/transaction", formSubmission)
//             .then(res => {
//                 swal("Successful", "Your data is saved!");
//                 console.log(res);
//             })
//             .catch(error => {
//                 swal("Error", "Your data is not saved!");
//                 console.error(error);
//             });
//     };

//     return (
//         <div>
//             <motion.div
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//                 animate={{ z: 100, scale: 1 }}
//                 initial={{ scale: 0 }}
//                 className="transaction-body"
//             >
//                 <div className="transaction-wrapper">
//                     <div className="transaction-title">
//                         <h1>Transaction Details</h1>
//                     </div>
//                     <form className="transaction-form-container" onSubmit={handleSubmit}>
//                         <div className="transaction-form">
//                             <div className="transaction-form input-field">
//                                 <label>Date</label>
//                                 <input
//                                     type="date"
//                                     name="date"
//                                     value={formSubmission.date}
//                                     onChange={handleInput}
//                                 />
//                             </div>

//                             <div className="transaction-form input-field">
//                                 <label>Employee</label>
//                                 <select
//                                     name="employee"
//                                     value={formSubmission.employee}
//                                     onChange={handleInput}
//                                 >
//                                     {/* Add options dynamically based on your data */}
//                                     <option value="">Select Employee</option>
//                                     <option value="3526fc23-4c68-47aa-bf2d-4edbc37fd5c1">tushar k</option>
//                                     {/* <option value="3526fc23-4c68-47aa-bf2d-4edbc37fd5c1">Employee 2</option> */}
//                                     {/* Add more options as needed */}
//                                 </select>
//                             </div>

//                             <div className="transaction-form input-field">
//                                 <label>Product</label>
//                                 <select
//                                     name="product"
//                                     value={formSubmission.product}
//                                     onChange={handleInput}
//                                 >
//                                     {/* Add options dynamically based on your data */}
//                                     <option value="">Select Product</option>
//                                     {products.map(product => (
//                                         <option key={product.product_id} value={product.product_id}>
//                                             {product.product_name}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="transaction-form input-field">
//                                 <label>Quantity</label>
//                                 <input
//                                     type="text"
//                                     name="quantity"
//                                     value={formSubmission.quantity}
//                                     onChange={handleInput}
//                                 />
//                             </div>

//                             <div className="transaction-form input-field">
//                                 <label>Transaction Type</label>
//                                 <div>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="transactionType"
//                                             value="import"
//                                             checked={formSubmission.transactionType === "import"}
//                                             onChange={handleRadioChange}
//                                         />
//                                         Inward
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="transactionType"
//                                             value="export"
//                                             checked={formSubmission.transactionType === "export"}
//                                             onChange={handleRadioChange}
//                                         />
//                                         Outward
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="transaction-buttons-container">
//                             <button type="submit" className="transaction-submit-button">
//                                 Submit
//                             </button>
//                             <button type="reset" className="transaction-cancel-button">
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default Transaction;
// /*---------------------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './transaction.css';
import swal from 'sweetalert';
import axios from 'axios';

const Transaction = () => {
    const today = new Date().toLocaleDateString('en-CA'); // Get today's date in the format YYYY-MM-DD
    const [products, setProducts] = useState([]);

    const [formSubmission, setFormSubmission] = useState({
        date: today,
        employee: "",
        product: "",
        quantity: "",
        transactionType: "import" // Default value for radio button
    });

    const handleInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        // If the input is for quantity, validate it to allow only numeric input
        if (name === 'quantity') {
            // Check if the entered value is numeric
            if (!isNaN(value)) {
                // Update the state only if the value is numeric
                setFormSubmission({ ...formSubmission, [name]: value });
            }
        } else {
            // For other inputs, update the state directly
            setFormSubmission({ ...formSubmission, [name]: value });
        }
    };

    useEffect(() => {
        // Fetch product types from the API
        axios.get('http://192.228.1.20:8081/api/users/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product types:', error);
            });

    }, []); // Run this effect only once on component mount

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setFormSubmission({ ...formSubmission, transactionType: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming your API endpoint is correct and you want to use axios
        // Make sure to handle the API endpoint appropriately
        axios.post("http://192.228.1.20:8081/api/users/transaction", formSubmission)
            .then(res => {
                swal("Successful", "Your data is saved!");
                console.log(res);
            })  
            .catch(error => {
                swal("Error", "Your data is not saved!");
                console.error(error);
            });
    };

    return (
        <div>
            <motion.div
                transition={{ duration: 0.3, ease: 'easeOut' }}
                animate={{ z: 100, scale: 1 }}
                initial={{ scale: 0 }}
                className="transaction-body"
            >
                <div className="transaction-wrapper">
                    <div className="transaction-title">
                        <h1>Transaction Details</h1>
                    </div>
                    <form className="transaction-form-container" onSubmit={handleSubmit}>
                        <div className="transaction-form">
                            <div className="transaction-form input-field">
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formSubmission.date}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="transaction-form input-field">
                                <label>Employee</label>
                                <select
                                    name="employee"
                                    value={formSubmission.employee}
                                    onChange={handleInput}
                                >
                                    {/* Add options dynamically based on your data */}
                                    <option value="">Select Employee</option>
                                    <option value="10797b13-f63b-4712-bc75-f773e41c33e6">Ram Raj</option>
                                    <option value="2c4b6d0e-16c3-4e10-a7b7-b8f802812d8d">Harman</option>
                                    <option value="cf8dcbad-4739-453b-86e8-87876064e94f">Sid P</option>
                                    <option value="f1992c73-6a69-4573-96f8-b40fe064eca2">aashvain M </option>
                                
                                    {/* <option value="3526fc23-4c68-47aa-bf2d-4edbc37fd5c1">Employee 2</option> */}
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="transaction-form input-field">
                                <label>Product</label>
                                <select
                                    name="product"
                                    value={formSubmission.product}
                                    onChange={handleInput}
                                >
                                    {/* Add options dynamically based on your data */}
                                    <option value="">Select Product</option>
                                    {products.map(product => (
                                        <option key={product.product_id} value={product.product_id}>
                                            {product.product_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="transaction-form input-field">
                                <label>Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    value={formSubmission.quantity}
                                    onChange={handleInput}
                                />
                            </div>

                                        <div className="transaction-form input-field">
                <label>Transaction Type</label>
                <div>
                    <input
                        type="button"
                        value="Inward"
                        className={formSubmission.transactionType === 'import' ? 'selected' : ''}
                        onClick={() => setFormSubmission({ ...formSubmission, transactionType: 'import' })}
                    />
                    <input
                        type="button"
                        value="Outward"
                        className={formSubmission.transactionType === 'export' ? 'selected' : ''}
                        onClick={() => setFormSubmission({ ...formSubmission, transactionType: 'export' })}
                    />
                </div>
            </div>

                        </div>

                        <div className="transaction-buttons-container">
                            <button type="submit" className="transaction-submit-button">
                                Submit
                            </button>
                            <button type="reset" className="transaction-cancel-button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Transaction;
