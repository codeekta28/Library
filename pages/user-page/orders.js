import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import UserOrder from "../../Components/UserOrder";

function orders({ orders }) {
  // console.log("Order",orders);
  const final = orders.map((val) => {
    return (
      <>
    <UserOrder name={val.bookDetail.name} author={val.bookDetail.author} price={val.bill} qty={val.qty} status={val.status}/>
   
 
      </>
    );
  });

  return (
    <>
   
     <div style={{height:"100vh"}} className="container-fluid bg-black p-5">
      <h2 className="text-light text-center mb-5">Your Order Status</h2>
         <div className="row">{final}</div>
      </div> 
    </>
    //   <Provider store={store}>
    //   <div>{/* page content goes here */}</div>
    // </Provider>
  );
}

export default orders;
export const getServerSideProps = async ({ query }) => {
  const { userName } = query;
  const res = await fetch(
    `http://localhost:3000/api/orders?userName=${userName}`
  );
  const data = await res.json();

  // Return the data as part of the props object
  return {
    props: {
      orders: data,
    },
  };
};
