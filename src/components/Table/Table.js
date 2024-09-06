import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../../styles/categoryPageStyle/Table.css';

const Table = ({ headings, data, onEdit, onDelete }) => {
    return (
        <table className="dynamic-table">
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headings.map((heading, index) => {
                                if (heading === 'Status') {
                                    return (
                                        <td key={index}>
                                            <span className={`status-box ${row[heading].toLowerCase()}`}>
                                                {row[heading].charAt(0).toUpperCase() + row[heading].slice(1)}
                                            </span>
                                        </td>
                                    );
                                }
                                return (
                                    heading !== 'Actions' && <td key={index}>{row[heading]}</td>
                                );
                            })}
                            <td>
                                <button onClick={() => {
                                    console.log('Edit ID:', row.id);
                                    onEdit(row.id);
                                }} aria-label="Edit">
                                    <FaEdit />
                                </button>
                                <button onClick={() => {
                                    console.log('Delete ID:', row.id);
                                    onDelete(row.id);
                                }} aria-label="Delete">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={headings.length + 1}>No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
