/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors=require("cors");
const sec_key='sk_test_51NUhdMSCdySUYrmqg9i1hcWI7jm6Si6KH7mPMtBelYYvz760wNJKfAGzyOLm9gPaAzC1LUWIMmRSDAHB9pJa9DQI00JjSl5jbo';
const stripe=require("stripe")(sec_key);

//API

//APP Config
const app = express();

//Middleware
app.use(cors({origin:true})); //Cross origin resource sharing middleware for allowing requests to be made cross domain
app.use(express.json);

//API routes
app.get('/',(req,res)=> res.status(200).send('Hello World'));

// app.post('/payments/create',async (req,res)=>{
//     const total=req.query.total;

//     console.log("Payment Request Recieved!!! Amount recieved >>>",total);
//     const paymentIntent=await stripe.paymentIntents.create({
//         amount: total,  //subunits of currency
//         currency:'usd'
//     });

//     //Ok - command
//     res.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });

//Listen Command
exports.api=functions.https.onRequest(app);











// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
