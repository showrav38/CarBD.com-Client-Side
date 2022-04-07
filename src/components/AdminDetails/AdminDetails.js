import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AdminDetails = (props) => {
    console.log(props.admin);
    const { id, age, Position, name, img } = props.admin;
    return (
        <div>
            <div className="resPadd" >
                <Col >
                    <Card style={{ fontSize: 'larger', width: '350px', height: '440px', margin: '20px' }}>
                        <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold' }} >Position: {Position}</Card.Text>
                            <Card.Text style={{ width: '330px', height: '140px', }}>
                                Age: {age}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div >
        </div>
    );
};

export default AdminDetails;