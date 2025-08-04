import React, { useRef, useState, useEffect, useContext } from "react";
import '../style/tour-details.css';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
// import tourData from '../assets/data/tours';
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newletter from "../shared/Newletter";
import useFetch from "../components/hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/authcontext";

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef(' ');
    const [tourRating, setTourRating] = useState(null);
    const {user} = useContext(AuthContext);

    //  it will be fetched from an database 
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    // Destructure properties from tour object
    const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;

    const { totalRating, avgRating } = calculateAvgRating(reviews);

    // Format date
    const options = { day: 'numeric', month: "long", year: "numeric" };

    // Submit handler for reviews
    const submitHandler = async e => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
        // alert(`${reviewText}, ${tourRating}`);
        // Later, you will send the review to the server

        
        try {
            if(!user|| user===undefined || user===null){
                alert('please sign in')
            }

            const reviewObj = {
                username:user?.username,
                reviewText,
                rating:tourRating
            }

            const res = await fetch(`${BASE_URL}/review/${id}`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(reviewObj)
            })

            const result = await res.json();
            if(!res.ok){
                return alert(result.message);
            }
            alert(result.message)
            // alert('Review Submitted');
            
        } catch (err) {
            alert(err.message)

            
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [tour]);

    return (
        <>
            <section>
                <Container>
                    {
                        loading && <h4 className='text-center pt-5'>Loading.........</h4>
                    }
                    {
                        error && <h4 className='text-center pt-5'>{error}</h4>
                    }
                    {
                        !loading && !error && <Row>
                            <Col lg='8'>
                                <div className="tour__content">
                                    <img src={photo} alt={title} />

                                    <div className="tour__info">
                                        <h2>{title}</h2>

                                        <div className="d-flex align-items-center gap-5">
                                            <span className="tour__rating d-flex align-items-center gap-1">
                                                <i className="ri-star-fill" style={{ 'color': " var(--secondary-color)" }}></i>
                                                {avgRating === 0 ? null : avgRating}
                                                {totalRating === 0 ? (
                                                    "Not rated"
                                                ) : (
                                                    <span>({reviews?.length})</span>
                                                )}
                                            </span>

                                            <span>
                                                <i className="ri-map-pin-fill"></i> {address}
                                            </span>
                                        </div>

                                        <div className="tour__extra-details">
                                            <span><i className='ri-map-pin-2-line'></i>{city}</span>
                                            <span><i className='ri-money-dollar-circle-line'></i> ${price} /per person</span>
                                            <span><i className='ri-map-pin-time-line'></i> {distance} k/m</span>
                                            <span><i className='ri-group-line'></i>{maxGroupSize} People</span>
                                        </div>
                                        <h5>Description</h5>
                                        <p>{desc}</p>
                                    </div>

                                    {/**=======================Tour Reviews Section=============================== */}
                                    <div className="tour__review mt-5">
                                        <h4>Review({reviews?.length} reviews)</h4>

                                        <form onSubmit={submitHandler}>
                                            <div className="d-flex align-items-center gap-3 mb-4">
                                                <span onClick={() => setTourRating(1)}>1<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(2)}>2<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(3)}>3<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(4)}>4<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(5)}>5<i className="ri-star-s-fill"></i></span>
                                            </div>

                                            <div className="review__input">
                                                <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required />
                                                <button className="btn primary__btn text-white">Submit</button>
                                            </div>
                                        </form>

                                        <ListGroup className="user__reviews">
                                            {
                                                reviews?.map((review, index) => (
                                                    <div className="review__item" key={index}>
                                                        <img src={avatar} alt="User Avatar" />

                                                        <div className="w-100">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <h5>{review.username}</h5>
                                                                    <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                                </div>
                                                                <span className="d-flex align-items-center">
                                                                    {review.rating}<i className="ri-star-s-fill"></i>
                                                                </span>
                                                            </div>
                                                            <h6>{review.reviewText}</h6>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </ListGroup>
                                    </div>
                                    {/**=======================Tour Reviews Section End============================== */}
                                </div>
                            </Col>
                            <Col lg='4'>
                                <Booking tour={tour} avgRating={avgRating} />
                            </Col>
                        </Row>
                    }
                </Container>
            </section>
            <Newletter />
        </>
    );
};

export default TourDetails;

