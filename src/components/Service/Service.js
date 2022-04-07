import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = props => {
  const { serv } = props;
  const { _id, id, name, price, description, img, madeIn, milage, mode, released } = serv;
  const url = `/booking/${_id}`;
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div class="card" style={{ boxShadow: '5px 5px 10px rgb(0,0,0,.25)' }}>
        <div className="geeks">
          <img
            style={{ height: '250px', borderBottom: '4px solid #1da6bb' }}
            class="card-img-top"
            src={img}
            alt="Card image cap"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <h5 class="card-title">Price: {price}Tk</h5>
          <p class="card-text">{description}</p>
          <Link to={url}>
            <button class="btn btn-primary">Purchase</button>
          </Link>
        </div>
      </div>
    </div>
    /* <div className="resPadd">
      <Col>
        <Card style={{ fontSize: 'larger', width: '350px', height: '', margin: '20px' }}>
          <Card.Img style={{ height: '300px' }} variant="top" src={img} />
          <Card.Body>
            <Card.Title className="bg-secondary fw-bold text-white">{name}</Card.Title>
            <Card.Title className="bg-secondary fw-bold text-white">Mode: {mode}</Card.Title>
            <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold' }}>
              {' '}
              Milage: {milage} KPH{' '}
            </Card.Text>
            <Card.Text style={{ color: 'black', fontWeight: 'bold', height: '' }}>
              version: {released}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div> */
  );
};

export default Service;
