import React, { useRef } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AdminAddNewProduct = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const milageRef = useRef();
    const madeRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const releasedTimeRef = useRef();
    const modeRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const milage = milageRef.current.value;
        const madeIn = madeRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const released = releasedTimeRef.current.value;
        const mode = modeRef.current.value;

        const newService = { name, img, description, madeIn, milage, price, released, mode };
        fetch('https://calm-anchorage-33077.herokuapp.com/services', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <div className="pt-4 bt-4 mt-4 fw-bolder">
                <h2 className="bt-4 text-center">Add New Car Item</h2>
                <form onSubmit={handleAddUser} className="row g-3 px-4 b-4 m-4">
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="inputName4" ref={nameRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Image URL</label>
                        <input type="text" class="form-control" id="inputImg4" ref={imgRef} required />
                    </div>
                    <div class="col-md-4">
                        <label for="inputPrice" class="form-label">Price (Tk)</label>
                        <input type="number" class="form-control" id="inputPrice" placeholder="" ref={priceRef} required />
                    </div>
                    <div class="col-md-8">
                        <label for="inputdescription2" class="form-label">Description</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="" ref={descriptionRef} required />
                    </div>
                    <div class="col-md-3">
                        <label for="inputCity" class="form-label">Made In</label>
                        <input type="text" class="form-control" id="inputCity" ref={madeRef} required />
                    </div>
                    <div class="col-md-3">
                        <label for="inputZip" class="form-label">Milage (KPH)</label>
                        <input type="text" class="form-control" id="inputZip" ref={milageRef} required />
                    </div>
                    <div class="col-md-3">
                        <label for="input" class="form-label">Mode</label>
                        <input type="text" class="form-control" id="input" ref={modeRef} required />
                    </div>
                    <div class="col-md-3 mt-4">
                        <label for="inputZi" class="form-labl">Released</label>
                        <input type="text" class="form-control" id="inputZi" ref={releasedTimeRef} required />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary px-3">Add Item</button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default AdminAddNewProduct;



// "id": 9,
// "img": "https://i.ibb.co/Wx5KPzj/5.jpg",
// "name": "Maserati",
// "price": "$90,000",
// "madeIn": "Spain",
// "milage": "35,000 km",
// "mode": "Automatic",
// "released": "2010",
// "description": "Booakkajsjjjejdjjfjfhhfho"