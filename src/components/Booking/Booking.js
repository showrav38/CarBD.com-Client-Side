import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';

import BookingDetail from '../BookingDetail/BookingDetail';

const Booking = () => {
    const { serviceId } = useParams();
    console.log(serviceId);

    const [services, setServices] = useData();
    console.log(services);

    const user = services.filter((user) => user._id == serviceId)
    console.log(user);
    return (
        <div>

            {
                user.map(show => <BookingDetail key={show.id}
                    show={show}></BookingDetail>)
            }
        </div>
    );
};

export default Booking;

//img
// : "https://i.ibb.co/VNn6DqR/2.jpg"
// name
// : "Mazda CX-5 SX, Sunroof"
// price
// : "$91,000"
// madeIn
// : "Germany"
// milage
// : "2,500 km"
// mode
// : "Manual"
// released
// : "2017"
// description
// : "kakakkkakakakaooooooooooooooooooo"