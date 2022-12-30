import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';


function orders({orders}) {
 console.log("orders",orders);
 const final=orders.map((val)=>{
  return(
    <>
    
    <h1>{val.bookDetail.name}</h1>
    <h2>{val.bookDetail.author}</h2>
    <h2>{val.qty}</h2>
    <h2>{val.status}</h2>
    <hr/>
    </>
  )
 })
  

  return (
    <>
    {final}
    </>
  //   <Provider store={store}>
  //   <div>{/* page content goes here */}</div>
  // </Provider>
  )
}

export default orders
export const getServerSideProps = async ({ query }) => {
 
  const { userName } = query;
  const res=await fetch(`http://localhost:3000/api/orders?userName=${userName}`)
  const data=await res.json();
  

 

  // Return the data as part of the props object
  return {
    props: {
     orders: data,
    },
  };
};