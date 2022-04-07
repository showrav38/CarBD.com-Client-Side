import React, { useEffect, useState } from 'react';

const UseDataR = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://calm-anchorage-33077.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(reviews);
            })
    }, []);

    return [reviews, setReviews]

};
export default UseDataR;