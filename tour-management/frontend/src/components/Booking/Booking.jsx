// import React, { useState, useContext } from 'react';
// import './booking.css';
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/authcontext';
// import { BASE_URL } from '../../utils/config';

// const Booking = ({ tour, avgRating, title }) => {

//   const { price, reviews } = tour;
//   const navigate = useNavigate();

//   const {user} = useContext(AuthContext);


//   const [booking, setBooking] = useState({
//     userId: user && user._id,
//     userEmail: user && user.email,
//     tourName: title,
//     fullName: '',
//     phone: '',
//     guestSize: 1,
//     bookAt: ''
//   });

//   const handleChange = e => {
//     setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const serviceFee = 10
//   const totaAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

//   // Send data to the server 
//   const handleClick = async e => {
//     e.preventDefault();

//     console.log(booking);


//     try {
//       if(!user || user===undefined || user===null){
//         return alert('please sign in');
//       }

//       const res = await fetch(`${BASE_URL}/booking`,{
//         method:'post',
//         headers:{
//           'content-type':'application/json'
//         },
//         credentials:'include',
//         body:JSON.stringify(booking)
//       })

//       const result = await res.json()

//       if(!res.ok){
//         return alert(result.message)
//       }
//       navigate("/thank-you");

//     } catch (err) {

//       alert(err.message)

//     }
//   };

//   return (
//     <div className='booking'>
//       <div className='booking__top d-flex align-items-center justify-content-between'>
//         <h3>${price}<span>/per person</span></h3>
//         <span className="tour__rating d-flex align-items-center">
//           <i className="ri-star-fill"></i>
//           {avgRating === 0 ? null : avgRating}  ({reviews?.length})
//         </span>
//       </div>

//       {/**==============================================Booking Form======================================================= */}
//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className='booking__info-form' onSubmit={handleClick}>
//           <FormGroup>
//             <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
//           </FormGroup>
//           <FormGroup>
//             <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
//           </FormGroup>
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
//             <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange} />
//           </FormGroup>
//         </Form>
//       </div>
//       {/**==============================================Booking End======================================================= */}

//       {/**==============================================Booking Bottom======================================================= */}
//       <div className="booking__bottom">
//         <ListGroup>
//           <ListGroupItem className="border-0 px-0">
//             <h5 className='d-flex align-items-center gap-1'>${price}<i className="ri-close-line"></i> 1 Person</h5>
//             <span>${price}</span>
//           </ListGroupItem>
//           <ListGroupItem className="border-0 px-0">
//             <h5>Service Charge</h5>
//             <span>${serviceFee}</span>
//           </ListGroupItem>
//           <ListGroupItem className="border-0 px-0 total">
//             <h5>Total</h5>
//             <span>${totaAmount}</span>
//           </ListGroupItem>
//         </ListGroup>
//         <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
//       </div>
//     </div>
//   );
// };

// export default Booking;

// import React, { useState, useContext, useEffect } from 'react';
// import './booking.css';
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/authcontext';
// import { BASE_URL } from '../../utils/config';

// const Booking = ({ tour, avgRating }) => {
//   const { price, reviews, title } = tour;
//   const navigate = useNavigate();

//   const { user } = useContext(AuthContext);

//   const [booking, setBooking] = useState({
//     userId: '',
//     userEmail: '',
//     tourName: title,
//     fullName: '',
//     phone: '',
//     guestSize: 1,
//     bookAt: ''
//   });

//   useEffect(() => {
//     if (user) {
//       setBooking(prev => ({
//         ...prev,
//         userId: user._id,
//         userEmail: user.email
//       }));
//     }
//   }, [user]);

//   const handleChange = e => {
//     setBooking(prev => ({
//       ...prev,
//       [e.target.id]: e.target.value
//     }));
//   };

//   const serviceFee = 10;
//   const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

//   const handleClick = async e => {
//     e.preventDefault();

//     try {
//       if (!user || !user._id) {
//         return alert('Please sign in!');
//       }

//       const res = await fetch(`${BASE_URL}/booking`, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify(booking)
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         return alert(result.message);
//       }

//       navigate('/thank-you');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="booking">
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>${price} <span>/per person</span></h3>
//         <span className="tour__rating d-flex align-items-center">
//           <i className="ri-star-fill"></i>
//           {avgRating === 0 ? null : avgRating}
//           <span>({reviews?.length})</span>
//         </span>
//       </div>

//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className="booking__info-form" onSubmit={handleClick}>
//           <FormGroup>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="fullName"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <input
//               type="number"
//               placeholder="Phone"
//               id="phone"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input
//               type="date"
//               placeholder=""
//               id="bookAt"
//               required
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               placeholder="Guest"
//               id="guestSize"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//       </div>

//       <div className="booking__bottom">
//         <ListGroup>
//           <ListGroupItem className="border-0 px-0">
//             <h5 className="d-flex align-items-center gap-1">
//               ${price} <i className="ri-close-line"></i> {booking.guestSize} {booking.guestSize > 1 ? 'people' : 'person'}
//             </h5>
//             <span>${price * booking.guestSize}</span>
//           </ListGroupItem>

//           <ListGroupItem className="border-0 px-0">
//             <h5>Service charge</h5>
//             <span>${serviceFee}</span>
//           </ListGroupItem>

//           <ListGroupItem className="total border-0 px-0">
//             <h5>Total</h5>
//             <span>${totalAmount}</span>
//           </ListGroupItem>
//         </ListGroup>

//         <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
//           Book Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Booking;




// import React, { useState, useContext, useEffect } from 'react'
// import './booking.css'
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/authcontext';
// import { BASE_URL } from '../../utils/config';

// const Booking = ({ tour, avgRating,title }) => {

//   const { price, reviews } = tour
//   const navigate = useNavigate()

//   const { user } = useContext(AuthContext)

//   const [booking, setBooking] = useState({
//     userId: '',
//     userEmail: '',
//     tourName: title,
//     fullName: '',
//     phone: '',
//     guestSize: 1,
//     bookAt: ''
//   });
  
//   useEffect(() => {
//     if (user) {
//       setBooking(prev => ({
//         ...prev,
//         userId: user._id,
//         userEmail: user.email
//       }));
//     }
//   }, [user]);
  

//   const handleChange = (e) => {
//     setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
//   }

//   // send data to the server
//   const handleClick = async (e) => {
//     e.preventDefault()

//     console.log(booking);

//     try {
//       if (!user || user === undefined || user === null) {
//         return alert('please sign in');
//       }

//       const res = await fetch(`${BASE_URL}/booking`,{
//         method:'post',
//         headers:{
//           'content-type':'application/json'
//         },
//         credentials:'include',
//         body:JSON.stringify(booking)

//       })

//       const result = await res.json()

//       if(!res.ok){
//         return alert(result.message)
//       }
//       navigate('/thank-you')


//     } catch (err) {
//       alert(err.message)

//     }

//   }

//   const serviceFee = 10;
//   const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);


//   return (
//     <div className='booking'>
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>${price} <span>/per person</span></h3>
//         <span className='tour__rating d-flex  align-items-center gap-1'>
//           <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating} ({reviews?.length})
//         </span>
//       </div>

//       {/*WWWWWWWWWWWWWWWWWWWW BOOKING FORM START WWWWWWWWWWWWWWWWWWWWWWWWWWWW*/}
//       {/*WWWWWWWWWW MODIFIER SYSTEME DE VALIDATION WWWWWWWWWWWWWWWWWWWWWWWWWWWWW*/}
//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className='booking__info-form' onSubmit={handleClick}>
//           <FormGroup>
//             <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
//           </FormGroup>
//           <FormGroup>
//             <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
//           </FormGroup>
//           <FormGroup className='d-flex align-items-center gap-3'>
//             <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
//             <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
//           </FormGroup>
//         </Form>
//       </div>
//       {/*WWWWWWWWWWWWWWWWWWWW BOOKING FORM END   WWWWWWWWWWWWWWWWWWWWWWWWWWWW*/}

//       {/*WWWWWWWWWWWWWWWWWWWW BOOKING BOTTOM START WWWWWWWWWWWWWWWWWWWWWWWWWWWW*/}
//       <div className="booking__bottom">
//         <ListGroup>
//           <ListGroupItem className='border-0 px-0'>
//             <h5 className='d-flex align-items-center gap-1'>
//               ${price}
//               <i className='ri-close-line'></i>
//               1 person
//             </h5>
//             <span>
//               ${price}
//             </span>
//           </ListGroupItem>
//           <ListGroupItem className='border-0 px-0'>
//             <h5>
//               Service charge
//             </h5>
//             <span>
//               ${serviceFee}
//             </span>
//           </ListGroupItem>
//           <ListGroupItem className='border-0 px-0 total'>
//             <h5>
//               Total
//             </h5>
//             <span>
//               ${totalAmount}
//             </span>
//           </ListGroupItem>
//         </ListGroup>

//         <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>
//           Book Now
//         </Button>
//       </div>
//       {/*WWWWWWWWWWWWWWWWWWWW BOOKING BOTTOM END   WWWWWWWWWWWWWWWWWWWWWWWWWWWW*/}

//     </div>
//   )
// }

// export default Booking


// import React, { useContext, useState } from "react"
// import "./booking.css"
// import { Form, FormGroup, Button } from "reactstrap"
// import { AuthContext } from "../../context/authcontext.js"
// import { BASE_URL } from "../../utils/config.js"
// import { useNavigate } from "react-router-dom"

// const Booking = ({ tour, avgRating }) => {
//   const { price, reviews, title } = tour
//   const navigate = useNavigate()

//   const { user } = useContext(AuthContext)
//   const [booking, setBooking] = useState({
//     userId: user ? user._id : null,
//     userEmail: user ? user.email : "",
//     tourName: title,
//     fullName: "",
//     phone: "",
//     guestSize: 1,
//     bookAt: "",
//   })

//   const handleChange = (e) => {
//     setBooking({ ...booking, [e.target.id]: e.target.value })
//   }

//   const handleClick = async (e) => {
//     e.preventDefault()

//     try {
//       if (!user || user === undefined || user === null) {
//         return alert("Please sign in")
//       }

//       const res = await fetch(`${BASE_URL}/booking`, {
//         method: "post",
//         headers: {
//           "content-type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(booking),
//       })

//       const result = await res.json()

//       if (!res.ok) {
//         return alert(result.message)
//       }

//       navigate("/thank-you")
//     } catch (err) {
//       alert("Booking failed.")
//     }
//   }

//   const serviceFee = 10
//   const totalAmount = Number(price) * Number(booking.guestSize) + serviceFee

//   return (
//     <div className="booking">
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>
//           ${price} <span>/ per person</span>
//         </h3>
//         <span className="tour__rating d-flex align-items-center">
//           <i class="ri-star-fill"></i>
//           {avgRating === 0 ? null : avgRating}
//           {reviews?.length === 0 ? (
//             "Not rated"
//           ) : (
//             <span>({reviews?.length})</span>
//           )}
//         </span>
//       </div>

//       {/* =========== booking form ============= */}
//       <Form className="booking__info-form" onSubmit={handleClick}>
//         <FormGroup>
//           <input
//             type="text"
//             placeholder="Full Name"
//             id="fullName"
//             required
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <input
//             type="number"
//             placeholder="Phone"
//             id="phone"
//             required
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup className="d-flex align-items-center gap-3">
//           <input
//             type="date"
//             placeholder=""
//             id="bookAt"
//             required
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             placeholder="Guest"
//             id="guestSize"
//             required
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <Button className="btn primary__btn w-100 mt-4" type="submit">
//           Book Now
//         </Button>
//       </Form>

//       {/* =========== booking bottom ============= */}
//       <div className="booking__bottom">
//         <ul className="booking__bottom-info">
//           <li>
//             <h5>${price} x {booking.guestSize} person</h5>
//             <span>${price * booking.guestSize}</span>
//           </li>
//           <li>
//             <h5>Service charge</h5>
//             <span>${serviceFee}</span>
//           </li>
//           <li className="total">
//             <h5>Total</h5>
//             <span>${totalAmount}</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Booking


import React, { useContext, useState } from "react" 
import "./booking.css"
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap"
import { AuthContext } from "../../context/authcontext.js"
import { BASE_URL } from "../../utils/config.js"
import { useNavigate } from "react-router-dom"

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId: user ? user._id : null,
    userEmail: user ? user.email : "",
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  })

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.id]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in")
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      })

      const result = await res.json()

      if (!res.ok) {
        return alert(result.message)
      }

      navigate("/thank-you")
    } catch (err) {
      alert("Booking failed.")
    }
  }

  const serviceFee = 10
  const totalAmount = Number(price) * Number(booking.guestSize) + serviceFee

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}
          {reviews?.length === 0 ? (
            "Not rated"
          ) : (
            <span>({reviews?.length})</span>
          )}
        </span>
      </div>

      {/* =========== booking form ============= */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <Button className="btn primary__btn w-100 mt-4" type="submit">
            Book Now
          </Button>
        </Form>
      </div>

      {/* =========== booking bottom ============= */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> {booking.guestSize} Person
            </h5>
            <span>${price * booking.guestSize}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  )
}

export default Booking
