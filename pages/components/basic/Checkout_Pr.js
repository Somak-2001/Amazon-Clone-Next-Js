import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../../StateProvider";

//Product Prototype of Checkout Page
const Checkout_Pr = ({id, title, price, image, rating }) => {
    const [state,dispatch]=useContext(StateContext);

    //Remove from basket action dispatch of reducer
    const Remove_item=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
            price:price
          })
    }
    return (
        <div>
            <div className="flex flex-row w-[60%] relative left-[5%] p-3">
            {/* Image section of product */}
                <div className="w-[50%]">
                    <Image src={image} width={200} height={100} alt='image' className="h-auto" />
                </div>
                {/* Other details are displayed */}
                <div className="w-[50%]">
                <div className="grid grid-cols-1 grid-rows-2 w-[100%]">
                    <strong>{title}</strong>
                    <strong>${price}</strong>
                    </div>
                    {/* Display the rating stars */}
                    <div className="flex relative bottom-[5%]">
                        {Array(rating).fill().map((_, i) =>
                            <p key={i}>🌟</p>
                        )
                        }
                    </div>
                    {/* The 'Remove from basket' button */}
                    <div className="w-full relative bottom-[2%] ">
                        <button className="bg-yellow-500 text-black w-[80%] shadow"
                        onClick={Remove_item}>Remove from Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout_Pr;
