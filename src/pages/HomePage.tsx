import React from 'react';
import OrdersList from '../components/OrdersList';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Order Management</h1>
            <OrdersList />
        </div>
    );
};

export default HomePage;
