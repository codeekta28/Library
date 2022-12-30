import { useState } from "react";
import { EditAPIData } from "../helper/EditAPIData";

function AdminOrderResponseStatus({ orderDetail }) {
  // Handle changes to the dropdown menu
  async function handleChange(event) {
    // approved

    if (parseInt(orderDetail.bookDetail.total) - parseInt(orderDetail.qty)) {
      const stock =
        parseInt(orderDetail.bookDetail.total) - parseInt(orderDetail.qty);
      if (event.target.value == 2) {
       
        const UpdatedBookObj = {
          id: orderDetail.bookId,
          name: orderDetail.bookDetail.name,
          author: orderDetail.bookDetail.author,
          total: stock,
        };
        const updatedOrderObj = {
          ...orderDetail,
          status: "approved",
          bookDetail: {
            ...orderDetail.bookDetail,
            total: stock,
          },
        };

        // for book api put request
        EditAPIData(
          "http://localhost:3000/api/books",
          UpdatedBookObj,
          orderDetail.bookId
        );

        // for order API put request
        // can do many things of this approved data but will think about it later
        const approvedOrderData = await EditAPIData(
          "http://localhost:3000/api/orders",
          updatedOrderObj,
          orderDetail.orderId
        );
        alert("order is approved and will be removed from orders in some time");
      }
    }

    // rejected
    if (event.target.value == 3) {
      console.log("rejected");
      const rejectedOrderObj = {
        ...orderDetail,
        status:"rejected",

      };
   
       // for order API put request
      const rejectedOrderData = await EditAPIData(
        "http://localhost:3000/api/orders",
        rejectedOrderObj,
        orderDetail.orderId
      );
    }
    // console.log("re",rejectedOrderData)
    alert("Your order is rejected and status will be updated in some time")
  }

  return (
    <form action="">
      <select onChange={handleChange}>
        <option value="1">Take Action</option>
        <option value="2">Approve</option>
        <option value="3">Reject</option>
      </select>
    </form>
  );
}

export default AdminOrderResponseStatus;
