// Task 6: Create the AddProductForm Component

import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            id: Date.now(),
            name,
            price,
            description
        };

        addProduct(newProduct); // Add the new product to the list in App
        setName(''); 
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Price:
                <input
                    type="text"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProductForm;