import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    quantity: number;
}

const OrdersList: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/order');
                setOrders(response.data);
            } catch (error) {
                console.error('There was an error fetching the orders!', error);
            }
        };

        fetchOrders();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/order/${id}`);
            setOrders(orders.filter(order => order.id !== id));
        } catch (error) {
            console.error('There was an error deleting the order!', error);
        }
    };

    return (
        <div>
            <h2>Orders List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.firstName} {order.lastName}: {order.description} (Quantity: {order.quantity})
                        <button onClick={() => handleDelete(order.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersList;
