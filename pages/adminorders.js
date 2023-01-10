import React from "react";
import { useSelector } from "react-redux";
import AdminOrderResponseStatus from "../Components/AdminOrderResponseStatus";

function adminorders({ orders }) {

  const orderDetail = orders.map((val) => {
      const color={
    color:val.status=="pending"?"red":"green"
  }
    if (val.status !== "approved") {
      return (
        <div className="border border-dark bg-black text-light rounded" key={val.orderId} style={{ margin: "20px", padding: "20px" }}>
          <h2>OrderId: {val.orderId}</h2>
          <h2 style={color}>status: {val.status}</h2>
          <h3>User:{val.userName}</h3>
          <h3>BookName:{val.bookDetail.name}</h3>
          <h3>AuthorName{val.bookDetail.author}:</h3>
          <h3>Order Quantity:{val.qty}</h3>
          <h3>Stock:{val.bookDetail.total}</h3>
          <AdminOrderResponseStatus orderDetail={val} />
       
        </div>
      );
    }
  });

  return <div className="">

  {orderDetail}
  </div>;
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
