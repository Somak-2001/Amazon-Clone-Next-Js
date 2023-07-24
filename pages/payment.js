import { useContext } from "react";
import { StateContext } from "./StateProvider";
import Header from "./components/basic/Header";
import Checkout_Pr from "./components/basic/Checkout_Pr";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import Cardform from "./components/basic/Cardform";

// const promise = loadStripe('pk_test_51NUhdMSCdySUYrmqlnh3GtmrnlKHUrboq3GTNVu0S07ocFp1yaruVA5iByDE1TFnyiuxA016niwXrtnop4kQOsuS00eWELo3IG');

const Payment = () => {
    const [{ basket, user }] = useContext(StateContext);

    return (
        <div className="bg-gray-200 w-full h-[100vh] overflow-x-hidden">
            <Header />
            {/* Heading */}
            <div className="p-2">
                <h1 className="text-4xl font-bold font-mono relative bottom-44 
        left-[35%]">Checkout (<span className="text-violet-700">{basket?.length} items</span>)
                </h1>
            </div>
            {/* Delivery address */}
            <div className="bg-white relative bottom-28">
                <div className="flex flex-row p-3">
                    <div className="w-16">
                        <span className="font-bold text-lg">Delivery Address</span>
                    </div>
                    <div className="flex-col relative left-24 ml-10">
                        <p>{user?.email}</p>
                        <p>North 24 Pgs</p>
                        <p>West Bengal, India</p>
                    </div>
                </div>
                <div className="w-[calc(100vw-5vw)] relative left-6 shadow-md">
                    <hr />
                </div>
                {/* Delivery products */}
                <div className="p-3">
                    <span className="font-bold text-lg">Review items and delivery</span>
                    {
                        basket.map(cur => {
                            return (
                                <div key={cur.id}>
                                    <Checkout_Pr id={cur.id} title={cur.title}
                                        price={cur.price}
                                        image={cur.image}
                                        rating={cur.rating} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-[calc(100vw-5vw)] relative left-3 shadow-md">
                    <hr />
                </div>


                {/* Payment method selection  */}
                <div>
                <h1 className="font-bold text-lg mr-8 mb-4 relative left-3">Payment method</h1>  
                {/* <Elements stripe={promise}> */}
                   <Cardform /> 
                {/* </Elements> */}
                </div>


            </div>
        </div>
    )
}

export default Payment;
