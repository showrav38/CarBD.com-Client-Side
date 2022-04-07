import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const ManageProducts = () => {
    const { user } = useAuth();

    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {
        const url = 'https://calm-anchorage-33077.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
                console.log(myProduct);
            });
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        console.log(id);
        if (proceed) {
            const url = `https://calm-anchorage-33077.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json()
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted successfully')
                        }
                        const remainingUsers = myProduct.filter(product => product._id !== id)
                        setMyProduct(remainingUsers);
                    }))
        }

    }

    return (
        <div>
            <Dashboard></Dashboard>
            <div className="pt-4 bt-4 mt-4 fw-bolder table-responsive">
                <h2 className="pt-4 bt-4 mt-4 text-center">Manage Products</h2>
                {/* <ul className="list-group "> */}
                <table className="table w-75 mx-auto">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Made In</th>
                            <th scope="col">Mode</th>
                            <th scope="col">Delete Order</th>
                        </tr>
                    </thead>
                    {
                        myProduct.map(product =>
                            <tbody key={product._id}>
                                <tr className="table-primary">
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.madeIn}</td>
                                    <td>{product.mode}</td>
                                    <td> <button className="mb-2 btn btn-primary" onClick={() => handleDeleteUser(product._id)} > Delete</button></td>
                                </tr>
                            </tbody>


                            // <li className="list-group-item list-group-item-primary" key={order._id}>Food name: {order.name}.....||.....Price: {order.price}.....||.....Order Status: {order.orderStatus}
                            //     <button className="m-3 bg-warning" onClick={() => handleDeleteUser(order._id)} > Delete</button></li>

                        )
                    }
                    {/* </ul> */}
                </table>
            </div>
        </div>
    );
};


export default ManageProducts;