import React from 'react';
import stockForm from '../components/stockForm/stockForm';
import Table from '../components/Table/Table';
import stock from '../hooks/useCategory';

const StockPage = () => {


    return (
        <div className="stock-page">
            <stockForm />
            <Table />
        </div>
    );
};

export default StockPage;