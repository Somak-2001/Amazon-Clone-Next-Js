import { useContext, useEffect, useState } from 'react';
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {getBasketTotal} from "./Subtotal";
// import axios from 'axios';
import { StateContext } from '@/pages/StateProvider';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Cardform = () => {
    // const stripe = useStripe();
    // const elements = useElements();
    const [error, setError] = useState(null);
    const [successed, setSuccessed] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    const [{ basket }] = useContext(StateContext);
    const [{orderBasket},dispatch] = useOrder();
    let total = getBasketTotal(basket);
    const router = useRouter();
    // useEffect(() => {
    //     // generate the special stripe secret which allows us to charge a customer
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             //Stripe expects the total in a currencies subunits
    //             url: `/payments/create?total=${total}`
    //         })
    //         setClientSecret(response.data.clientSecret);
    //     }

    //     getClientSecret();
    // }, [basket]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent }) => {
        //     //paymentIntent = payment confirmation

        //     setSuccessed(true);
        //     setError(null);
        //     setProcessing(false);
            
        //     router.replace('/orders');
        // })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : null);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='relative left-6'>
                {/* <CardElement onChange={handleChange} className='lg:w-[30%] md:w-[25%] sm:w-[22%]' /> */}
                <div className='w-[50%] grid grid-flow-col '>
                <input placeholder='Card Number' type='number' className='w-56 pl-2 border-2 border-gray-300' />
                <input placeholder='MM/YY' type='text' className='w-16 pl-1 border-2 border-gray-300' />
                <input placeholder='CVV' type='number' className='w-24 pl-1 border-2 border-gray-300' />
                </div>
                <div>
                    <h3 className='mt-2 mb-2'>Order Total : ${total.toFixed(2)}</h3>
                    {/* <Link href='/order'> */}
                    <button className=' bg-yellow-300 border-2 border-solid rounded cursor-pointer border-black mb-8' onClick={()=> 
                    {alert('Payment Successfull');
                     router.push('/');
                    }}>
                        {/* {processing ? <p>Processing</p> : "BUY NOW"} */}
                        BUY NOW
                    </button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    )
}

export default Cardform;
