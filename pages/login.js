// import Header from "./components/basic/Header"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { auth } from "./firebase";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';


//Login Page 
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //For Sign-in purpose
  const Signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      alert('Signed In successfully');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    })
    .catch((error)=>{
      alert(error.message);
      alert('Try again');
      setEmail('');
      setPassword('');
    })

  }

  //For Create new account
  const register = (e) => {
    e.preventDefault();

    //Creating new authorisation
    createUserWithEmailAndPassword(auth,email, password)
      .then((auth) => {
        alert('New user created successfully');
        console.log(auth);
        setTimeout(() => {
          router.push('/');
        }, 4000);
      })
      .catch(error => {
        alert(error.message);
        alert("Try Again")
      });

  }
  return (
    <>
      {/* <head>
        <title>Amazon Clone -- Login</title>
      </head> */}
      
      <div className="overflow-hidden lg:w-[calc(100vw-5vw)] md:w-[calc(100vw-1vw)] sm:w-[calc(100vw-1vw)]">
        {/* Amazon Logo */}
        <Link href='/'>
          <div className="relative left-[45%]">
            <Image src='/loginlogo.jpeg' width="150" height="100" alt='logo' className="lg:w-[150px] md:w-[110px] sm:w-[95px]"/>
          </div>
        </Link>


        {/* Email, Password field of Log in Page */}
        <form className="relative left-[40%] border-2 p-8 rounded-md shadow bg-transparent border-solid border-black w-[21%]">
          <h1 className="text-start font-bold text-3xl mb-6">Sign-in</h1>
          <div className="flex flex-col">
          {/* Email Field */}
            <label className="font-bold">Email</label>
            <input type="email" value={email} onChange={e => { setEmail(e.target.value) }} className="border-2 border-solid rounded-md border-black pl-1" />
            {/* Password Field */}
            <label className="font-bold mt-5">Password</label>
            <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} className="border-2 border-solid rounded-md border-black mb-5 pl-1" />
            <button type="submit" onClick={Signin} className="border-2 border-solid rounded p-1 border-black ml-2 bg-yellow-400">Sign-in</button>
          </div>


          {/* Normal Text */}
          <div className="w-42 relative top-2">
            <small className="m-5 md:text-base sm:text-sm md:h-20 sm:h-18">By continuing, you agree to Amazon&apos;s Conditions of Use and Privacy Notice.</small>
          </div>
        </form>
        <br />
        <div className="flex relative xl:left-[40%] lg:left-[40%] md:left-[38%]">
          {/* <hr className="w-[6%]"></hr> */}
          <p className="ml-2 mr-2 relative bottom-4 lg:w-full md:w-24 sm:w-16 lg:left-[6%] md:left-[1%] sm:left-[1%] font-semibold">New to Amazon ?</p>
          {/* <hr className="w-[6%] lg:left-[25%]"></hr> */}
        </div>


        {/* Registration button for new user */}
        <div className="relative xl:left-[43%] lg:left-[43%] md:left-[39%] sm:left-[35%] pl-8 shadow-lg border-2 border-solid border-black rounded-md lg:w-[15%] md:w-44 sm:w-36 md:pr-4 sm:pr-2 md:h-[10%] sm:h-[7%] bg-slate-200">
          <button className=" font-medium" onClick={register}>Create New Account</button>
        </div>
      </div>
    </>
  )
}

export default Login;
