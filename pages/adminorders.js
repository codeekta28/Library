import React from "react";
import { useSelector } from "react-redux";
import AdminOrderResponseStatus from "../Components/AdminOrderResponseStatus";

function adminorders({ orders }) {
  const orderDetail = orders.map((val) => {
    if (val.status !== "approved") {
 return(
  <div key={val.orderId} style={{ margin: "20px", padding: "20px" }}>
  <h2>OrderId:{val.orderId}</h2>
  <h2>User:{val.userName}</h2>
  <h2>BookName:{val.bookDetail.name}</h2>
  <h2>AuthorName{val.bookDetail.author}:</h2>
  <h2>Order Quantity:{val.qty}</h2>
  <h2>Stock:{val.bookDetail.total}</h2>
  <h2>status:{val.status}</h2>
  <AdminOrderResponseStatus orderDetail={val} />
  <hr />
</div>
 )
    }
  });

  return <>{orderDetail}</>;
}

export default adminorders;
export const getServerSideProps = async () => {
  // Fetch the JSON data from the API
  const res = await fetch("http://localhost:3000/api/orders");
  const jsonData = await res.json();

  // Return the data as part of the props object
  return {
    props: {
      orders: jsonData,
    },
  };
};
