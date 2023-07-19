
import Image from "next/image";
import Link from "next/link";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { StateContext } from "../../StateProvider";
import { useContext } from "react";
import { useRouter } from "next/router";
import {auth} from '../../firebase';
const Header = () => {
  const [{ basket,user }] = useContext(StateContext);
  // const [url,setUrl]=useState('');
  const handleAuth = () =>{
    if(user){
      auth.signOut();
    }
  }
  const router=useRouter();
  return (
    <>
      <div className="h-20 p-5 bg-sky-950 sticky w-full md:pt-3 sm:pt-3"></div>
      {/* Image */}
      <Link href="/">
        <Image src='/amazon-logo.jpg' width="100" height="100" className="relative bottom-20 m-4 cursor-pointer lg:w-[100px] md:w-[75px] sm:w-[60px]" />
      </Link>
      {/* Search Bar */}
      <div className="relative left-80 bottom-36">
      <div className="relative right-[8%]">
        <input type='text' placeholder="Search Amazon" className="lg:w-[50%] h-7 p-5 rounded-md bg-stone-50 md:w-2/5 sm:w-1/5 md:right-[30%] sm:right-[35%]" />
        <SearchOutlinedIcon className="bg-amber-500 rounded-md relative right-9 bottom-1" fontSize="large"
          sx={{
            height: 42,
            width: 35
          }}
        />
        </div>
        {/* NavBar Components */}
        <nav className="flex gap-10 flex-row relative xl:left-[40%] md:left-[35%] sm:left-[20%] md:w-[45%] sm:w-[45%] md:flex-shrink sm:flex-shrink bottom-11 text-slate-50 ml-24 md:right-[20%] sm:right-[30%]">
        {/* {
          setUrl(!user?'/login':'/')
        } */}
          {/* <Link href='/login'> */}
            <div className="flex flex-col cursor-pointer xl:mx-3 md:m-1 sm:m-1" onClick={()=>{
              if(!user){
                router.push('/login');
              }
            }}>
              <b className="relative bottom-3">Hello, {user?user.email:'Guest'}</b>
              <b className="relative bottom-3" onClick={handleAuth}>{user?'sign out':'sign in'}</b>
            </div>
          {/* </Link> */}
          <Link href='/order'>
          <div className="flex flex-col cursor-pointer xl:mx-3 md:mx-1 sm:m-1 relative bottom-3 ">
            <b>Returns</b>
            <span><b>& Orders</b></span>
          </div>
          </Link>
          <Link href="/checkout">
            <div className="cursor-pointer xl:mx-3 md:m-1 sm:m-1">
              <span className="relative bottom-5 left-4 text-xl">{basket?.length}</span>
              <span><ShoppingCartOutlinedIcon /></span>
              <span><b>Cart</b></span>
            </div>
          </Link>
        </nav>
      </div >
    </>
  )
}

export default Header;
