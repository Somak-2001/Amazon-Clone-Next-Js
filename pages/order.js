import { useContext } from "react";
import Header from "./components/basic/Header";
import { StateContext } from "./StateProvider";
import Checkout_Pr from "./components/basic/Checkout_Pr";

//Order history details of a user
const Order = () => {
  const [{basket,user}] = useContext(StateContext);
  
  return (
    <div>
      <Header/>
      <div>
      <div className="h-[30%] bg-white relative bottom-[25%] lg:pb-3 md:pb-16 sm:pb-24">
      {/* Welcome Text containing user mail id */}
        <h1 className="font-bold text-2xl mt-[2%] text-start p-3 rounded-md  w-[30%]">Welcome, {user ? user.email : ''}</h1>
        <h1 className="font-bold text-4xl  text-center p-3 rounded-md  w-[30%]">Order Details</h1>
        <br />
        <br />
      </div>
      {/* Orders of a customer */}
      <div>
        {
          basket.map((cur)=>{
            return(
              <Checkout_Pr 
                key={cur.id}
                id={cur.id} title={cur.title}
                  price={cur.price}
                  image={cur.image}
                  rating={cur.rating}
              />
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Order;
