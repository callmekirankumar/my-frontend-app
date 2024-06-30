import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (lastName.length > 20 || lastName.length === 0) {
            return 'Last Name must be entered and no longer than 20 characters';
        }
        if (description.length > 100 || description.length === 0) {
            return 'Description must be entered and no longer than 100 characters';
        }
        if (quantity < 1 || quantity > 20) {
            return 'Quantity must be a number between 1 and 20';
        }
        return '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setError(error);
            return;
        }

        const order = { firstName, lastName, description, quantity };

        try {
            await axios.post('/api/order', order);
            navigate('/');
        } catch (error) {
            console.error('There was an error creating the order!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name (optional):</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    maxLength={20}
                />
            </div>
            <div>
                <label>Last Name (mandatory):</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    maxLength={20}
                    required
                />
            </div>
            <div>
                <label>Description (mandatory):</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={100}
                    required
                />
            </div>
            <div>
                <label>Quantity (1-20):</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min={1}
                    max={20}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default OrderForm;
