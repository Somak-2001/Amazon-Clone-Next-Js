import Image from "next/image";
import styles from '@/styles/Homepage.module.css';
import Product from "./components/basic/Product";
import Header from "./components/basic/Header";
const Homepage = () => {
  return (
    <>
    {/* Header Section */}
      <Header/>
      {/* Background Image */}
      <Image src='https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg'
        width="0"
        height="0"
        sizes="85vw"
        alt='homepage'
        className={`w-full h-auto relative bottom-32 ${styles.img} md:h-[25%] sm:h-[15%]`}
      />
      {/* Products */}
      <div className="flex lg:m:0 md:mt-12 sm:mt-16 xl:flex-row lg:flex-row md:flex-row md:relative lg:mr-0 xl:mr-0 md:mr-[30%] sm:flex-col relative left-24 bottom-96">
        <Product id={1} title="The Lean Startup: How Constant innovation Creates Radically Successful Businesses Paperback"
        price={11.96}
        image="/OIP.jpeg"
        rating={5}
        />
        <Product id={2} title='Certified Refurbished Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light – Ad-Supported' price={139.99} image="/61Gih4cc2CL._AC_SX679_.jpg" rating={5}/>
        <Product id={3} title="CHASER Women's Live On Stage Tee"
        price={39.99}
        image="/71qjBQDSaVL._AC_UY445_.jpg"
        rating={4}
        />
      </div>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col relative left-2 bottom-56">
          <Product id={4} title='600 Piece Gold Dinnerware Set – 200 White and Gold Plastic Plates – Set of 300 Gold Plastic Silverware – 100 Gold Plastic Cups – Disposable Gold Dinnerware Set for Party or Wedding up to 100 Guests' price={85.99} image="/91KOcVZJDRL._AC_SX425_.jpg" rating={5}/>
          <Product id={5} title="Ozeino Gaming Headset PS4 Headset, Xbox Headset with 7.1 Surround Sound, Gaming Headphones Noise Cancelling Flexible Mic RGB Light Memory Earmuffs for PC, PS5, PS4, Xbox Series X/S, Switch" price={22.98} image="/712OyBPPL0L._AC_SY450_.jpg" rating={4}/>
          <Product id={6} title="Flameless LED Tea Light Candles, 36 PK Vivii Battery-Powered Unscented LED Tealight Candles, Fake Candles, Tealights (36 Pack)" price={12.99} image="/81xiJRmOwUL._AC_SX569_.jpg" rating={5}/>
          <Product id={7} title="Amazon Basics Vinyl Kettlebell" price={27.22} image="/81VVHshFuOL._AC_SX679_.jpg" rating={5}/>
      </div>
    </>
  )
}

export default Homepage;
