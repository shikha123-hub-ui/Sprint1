// import Booking from '../models/Booking.js'

// // create new booking
// export const createBooking = async (req, res) => {
//     const newBooking = new Booking(req.body)
//     try{
//         const savedBooking = await newBooking.save()

//         res.status(200).json({success: true,message:"Your tour is booked",data:savedBooking})
//     }catch(err){
//         res.status(500).json({success: false,message:'internal server error'})
//     }
// }


// // // get single booking
// export const getBooking = async (req, res) => {
//     const id = req.params.id

//     try{
//         const book = await Booking.findById(id)

//         res
//         .status(200)
//         .json({
//             success: true,
//             message:"successful",
//             data: book,
//         })
//     }catch(err){
//         res 
//         .status(404)
//         .json({
//             success: true,
//             message:'not found'
//         })
//     }
// }

// // // get all booking
// export const getAllBooking = async (req, res) => {
//     const id = req.params.id

//     try{
//         const books = await Booking.find()

//         res
//         .status(200)
//         .json({
//             success: true,
//             message:"successful",
//             data: books,
//         })
//     }catch(err){
//         res 
//         .status(500)
//         .json({
//             success: true,
//             message:'internal server error'
//         })
//     }
// }

// ======================================new=====================================*/

// import Booking from '../models/Booking.js';

// // Create new booking
// export const createBooking = async (req, res) => {
//   try {
//     const newBooking = new Booking(req.body);

//     const savedBooking = await newBooking.save();

//     res.status(200).json({
//       success: true,
//       message: "Your tour is booked",
//       data: savedBooking
//     });
//   } catch (err) {
//     console.error("Booking creation failed:", err); // ✅ Log the actual error
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: err.message
//     });
//   }
// };

// // Get single booking
// export const getBooking = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const book = await Booking.findById(id);

//     if (!book) {
//       return res.status(404).json({
//         success: false,
//         message: "Booking not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Successful",
//       data: book
//     });
//   } catch (err) {
//     console.error("Get booking failed:", err);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error"
//     });
//   }
// };

// // Get all bookings
// export const getAllBooking = async (req, res) => {
//   try {
//     const books = await Booking.find();

//     res.status(200).json({
//       success: true,
//       message: "Successful",
//       data: books
//     });
//   } catch (err) {
//     console.error("Get all bookings failed:", err);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error"
//     });
//   }
// };

// ===================================new============================================

import Booking from "../models/Booking.js"

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body)

  try {
    const savedBooking = await newBooking.save()

    res.status(200).json({
      success: true,
      message: "your tour is booked",
      data: savedBooking,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    })
  }
}

export const getBooking = async (req, res) => {
  const id = req.params.id

  try {
    const book = await Booking.findById(id)

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    })
  }
}

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find()

    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    })
  }
}

