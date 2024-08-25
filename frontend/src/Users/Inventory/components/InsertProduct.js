import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function InsertProduct() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [threshold, setThreshold] = useState(0);
    const [expiry, setExpiry] = useState("");
    const [supplierName, setSupplierName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const addProduct = async (e) => {
        e.preventDefault();

        if (!category || !name || quantity <= 0 || threshold < 0 || !expiry || !supplierName) {
            setError("*Please fill in all the required fields.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/inventory/insertproduct", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ category, name, quantity, threshold, expiry, supplierName })
            });

            if (response.ok) {
                alert("Data Inserted");
                // Reset the form
                setCategory("");
                setName("");
                setQuantity(0);
                setThreshold(0);
                setExpiry("");
                setSupplierName("");
                navigate('/products');
            } else if (response.status === 422) {
                alert("Product is already added.");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='container-fluid p-5'>
            <h1 className=''>Enter Product Information</h1>
            <form onSubmit={addProduct}>
                <div className="mt-5 col-lg-6 col-md-6 col-12">
                    <label htmlFor="category" className="form-label fs-4 fw-bold">Category</label>
                    <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} className="form-control fs-5" id="category" placeholder="Enter Category" required />
                </div>
                <div className="mt-3 col-lg-6 col-md-6 col-12">
                    <label htmlFor="name" className="form-label fs-4 fw-bold">Product Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control fs-5" id="name" placeholder="Enter Product Name" required />
                </div>
                <div className="mt-3 col-lg-6 col-md-6 col-12">
                    <label htmlFor="quantity" className="form-label fs-4 fw-bold">Quantity</label>
                    <input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} className="form-control fs-5" id="quantity" placeholder="Enter Quantity" required />
                </div>
                <div className="mt-3 col-lg-6 col-md-6 col-12">
                    <label htmlFor="threshold" className="form-label fs-4 fw-bold">Threshold</label>
                    <input type="number" onChange={(e) => setThreshold(e.target.value)} value={threshold} className="form-control fs-5" id="threshold" placeholder="Enter Threshold" required />
                </div>
                <div className="mt-3 col-lg-6 col-md-6 col-12">
                    <label htmlFor="expiry" className="form-label fs-4 fw-bold">Expiry Date</label>
                    <input type="date" onChange={(e) => setExpiry(e.target.value)} value={expiry} className="form-control fs-5" id="expiry" required />
                </div>
                <div className="mt-3 col-lg-6 col-md-6 col-12">
                    <label htmlFor="supplierName" className="form-label fs-4 fw-bold">Supplier Name</label>
                    <input type="text" onChange={(e) => setSupplierName(e.target.value)} value={supplierName} className="form-control fs-5" id="supplierName" placeholder="Enter Supplier Name" required />
                </div>
                <div className='d-flex justify-content-center col-lg-6 col-md-6'>
                    <NavLink to="/products" className='btn btn-primary me-5 fs-4'>Cancel</NavLink>
                    <button type="submit" className="btn btn-primary fs-4" disabled={loading}>{loading ? 'Inserting...' : 'Insert'}</button>
                </div>
                <div className="col text-center col-lg-6 ">
                    {error && <div className="text-danger mt-3 fs-5 fw-bold">{error}</div>}
                </div>
            </form>
        </div>
    );
}