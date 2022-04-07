import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useData from '../../hooks/useData';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services] = useData();

  console.log(services);

  return (
    <div id="newid" style={{overflowX:'hidden'}}>
      <div className="my-4 formb">
        <h1 className="text-center">Our Top Products</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {services.length === 0 ? (
              <div className="test10">
                <Spinner animation="border" />;
              </div>
            ) : (
              <div className="row gx-5 gy-sm-2">
                {services.slice(0, 6).map(service => (
                  <Service key={service._id} serv={service}></Service>
                ))}
              </div>
            )}
            <div className="mt-3 mx-auto text-center ttr">
            <NavLink to="/explore" className="btn-get-started">
              More
            </NavLink>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;

/* <div id="BikeServices" className="backgroundServices">
            <div>
                <h2 className="p-5 textCol">Products Demo</h2>
                
                <div className="service-container">
                    {
                        services.length === 0 ?
                            <Spinner animation="border" className="mx-auto mb-2" /> :
                            <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                {
                                    services.slice(0, 6).map(service => <Service key={service._id}
                                        service={service}></Service>)
                                }
                            </Row>
                    }
                </div>
            </div>
        </div> */
