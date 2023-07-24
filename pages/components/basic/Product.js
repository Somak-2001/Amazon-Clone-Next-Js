import { StateContext } from "../../StateProvider";
import { useContext } from "react";
import Image from "next/image";

//Prototype of product of homepage
const Product = ({id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useContext(StateContext);
  //ADD to Basket Action dispatch is defined
  const  Add_To_Basket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            title: title,
            price: price,
            image: image,
            rating: rating,
        }
    })
};
  // console.log(basket);
  return (
    <div className="bg-slate-200 m-5 p-5 xl:w-96 lg:w-96 md:w-52 sm:w-44 h-auto rounded-md shadow-md">
      <div className="">{title}</div>
      <br />
      <div className="flex">
        <span>$</span>
        <strong>{price}</strong>
      </div>
      {/* Rating stars are displayed */}
      <div className="flex">
        {Array(rating).fill().map((_, i) =>
          <p key={i}>🌟</p>
        )
        }
      </div>
      {/* Image Section */}
      <div className="flex justify-center m-4">
        <Image src={image} width={200} height={100} alt='image' className="h-auto" />
      </div>
      {/* Add to basket button added */}
      <div className="flex justify-center relative ">
        <button className="bg-amber-500 p-1 border-black rounded-md" onClick={Add_To_Basket}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;
