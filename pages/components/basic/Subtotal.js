import { StateContext } from "@/pages/StateProvider";
import { useContext } from "react";
// import CurrencyFormat from "react-currency-format";

export const getBasketTotal = (basket) => {
//accumulator === amount
    return basket?.reduce((amount, item) => {
        return amount + item.price
    }, 0);
}

const Subtotal = () => {
    const [{ basket }] = useContext(StateContext);
    let value=getBasketTotal(basket);
    console.log(value);
    return (
        <div>
            {/* <CurrencyFormat
                renderText={(value) => {
                    <>
                    <div className="flex">
                        <span>Subtotal ({basket.length} items) : </span>
                        <strong>{value}</strong>
                    </div>
                    </>
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            /> */}
            <div className="flex">
                <span>Subtotal ({basket.length} items) : </span>
                <strong> $ {value.toFixed(2)}</strong>
                
            </div>
        </div>
    )
}

export default Subtotal;
