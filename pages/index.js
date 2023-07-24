import Head from 'next/head';
import Homepage from './Homepage';
import {auth} from '../firebase.js';
import { useContext, useEffect } from 'react';
import { StateContext } from './StateProvider';
export default function Home() {
  const [{user},dispatch] = useContext(StateContext);
  useEffect(()=>{
     auth.onAuthStateChanged((authUser)=>{
      if(authUser){
         dispatch({
          type:'SET_USER',
          user: authUser
         })
      }
      else{
         dispatch({
          type: 'SET_USER',
          user: null
         })
      }
     })
  },[])
  return (
    <>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/R.png" />
      </Head>
      <main className='m-0 p-0 overflow-x-hidden'>
          <Homepage />
      </main>
    </>
  )
}
