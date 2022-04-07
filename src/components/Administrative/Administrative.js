import React from 'react';
import Footer from '../Footer/Footer';
import AdminDetails from '../AdminDetails/AdminDetails';
import { Row, Spinner } from 'react-bootstrap';

const Administrative = () => {
    const administratives = [
        {
            id: 1,
            name: "Sayem Mahud",
            Position: "Chairman",
            age: "50 yrs",
            img: " data:image/jpeg;base64,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"
        },
        {
            id: 2,
            name: "Tasfiq Ahmed",
            Position: "Account Head",
            age: "43 yrs",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2araBMDPbEjXQmCK-gQyFTN4NHIIrf7TB5xWHfwKtTUwy6XNlXuFchTPtQkI7DnYDr8E&usqp=CAU"
        },
        {
            id: 3,
            name: "RAazul Islam",
            Position: "Operatios Head",
            age: "40 yrs",
            img: "https://i.ibb.co/rZdzDvV/6.jpg"
        },
        {
            id: 4,
            name: "Istik Islam",
            Position: "Director",
            age: "50 yrs",
            img: "https://i.ibb.co/y5wqP0h/9.jpg"
        },
        {
            id: 5,
            name: "Soliaman Ahmed",
            Position: "InCharge Director",
            age: "48 yrs",
            img: " https://i.ibb.co/CH2n772/2.jpg"
        },
        {
            id: 6,
            name: "Ferdous",
            Position: "PR Director",
            age: "53 yrs",
            img: "  https://i.ibb.co/DRxVY5n/1.jpg"
        },
    ]
    return (
        <div>
            <div className="backgroundServices bg-secondary">
                <div>
                    <h2 className="pt-5 mt-5 textCol">Medical Administrative </h2>
                    <div className="service-container">
                        {
                            administratives.length === 0 ?
                                <Spinner animation="border" /> :
                                <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                    {
                                        administratives.map(admin => <AdminDetails key={admin.id}
                                            admin={admin}></AdminDetails>)
                                    }
                                </Row>
                        }
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Administrative;