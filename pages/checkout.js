import Checkout_Pr from "./components/basic/Checkout_Pr";
import Header from "./components/basic/Header";
import { useContext } from "react";
import { StateContext } from "./StateProvider";
import { useRouter } from "next/router";
import Subtotal from "./components/basic/Subtotal";


//Add to Cart page
const Checkout = () => {
  const [{ basket, user },] = useContext(StateContext);
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-[100vh] overflow-x-hidden">
      <Header />
      <div className="h-[30%] bg-white relative bottom-[25%] lg:pb-3 md:pb-16 sm:pb-24">
        <h1 className="font-bold text-2xl mt-[2%] text-start p-3 rounded-md  w-[30%]">Welcome, {user ? user.email : ''}</h1>
        <h1 className="font-bold text-4xl  text-center p-3 rounded-md  w-[30%]">Your Shopping Basket</h1>
        <br />
        <br />
        <div className="lg:w-[72%] lg:mt-10 md:w-[60%] sm:w-[55%] md:-top-12 sm:-top-10 relative left-[1%]">
          <hr />
        </div>
        <div className=" xl:w-[20%] lg:w-[20%] md:w-[11%] sm:w-[8%] lg:mb-11 lg:mt-5 lg:text-base md:bottom-[90%] md:-top-40 md:text-sm sm:bottom-[90%] sm:-top-56 sm:text-xs p-5 mr-16 bg-slate-100 border-2 border-solid border-slate-200 rounded relative -right-[78%]
        md:flex md:flex-col">
          <Subtotal />
          {/* <strong className="ml-2">{totalPrice}</strong> */}
          <div className="mt-[5%]">
            <input type="checkbox" />
            <label>This order contains a gift</label>
          </div>
          <div className=" w-full">
              <button type='button' className="bg-yellow-400 mt-[10%] lg:w-[80%] md:w-20 sm:w-16 relative left-[5%] 
            shadow-md" onClick={() => router.push('/Payment')} >Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <div>
        {
          basket.map((cur) => {
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
    </div>
  )
}

export default Checkout;
