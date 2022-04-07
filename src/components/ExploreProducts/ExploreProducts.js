import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useData from '../../hooks/useData';
import ProductDetail from '../ProductDetail/ProductDetail';
import Service from '../Service/Service';

const ExploreProducts = () => {
  const [services] = useData();

  console.log(services);

  return (
    <div id="newid">
      <div className="my-4">
        <h1 className="text-center">Explore All Products</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto fmbl">
            {services.length === 0 ? (
              <div className="test10">
                <Spinner animation="border" />;
              </div>
            ) : (
              <div className="row gx-5">
                {services.map(service => (
                  <ProductDetail key={service._id} serv={service}></ProductDetail>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    /* <div id="BikeServices" style={{ backgroundColor: '#B1A4A4' }}>
            <div>
                <h2 className="pt-5 mt-5 textCol">Explore Your Favourite</h2><br />


                <div className="service-container">
                    {
                        services.length === 0 ?
                            <Spinner animation="border" className="mx-auto mb-2" /> :
                            <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                {
                                    services.map(service => <ProductDetail key={service.id}
                                        service={service}></ProductDetail>)
                                }
                            </Row>
                    }
                </div>
            </div>
        </div> */
  );
};

export default ExploreProducts;
