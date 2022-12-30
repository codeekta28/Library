import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
// import { orderBook } from "../Redux/OrderRedux/orderType";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateData } from "../../helper/updateAPI";

function userpage({ books }) {
  const authDetail = useSelector((state) => state);
  const bookQtyRef = useRef();
  const inputValues = [];
  const router = useRouter();

  function handleClick(id, index) {
    const filteredObj = books.filter((val) => val.id == id);

    const orderDetailObj = {
      bookId: id,
      userName: authDetail.auth.userName,
      qty: inputValues[index].value,
      status: "pending",
    };
    const data = updateData("http://localhost:3000/api/orders", orderDetailObj);
    alert(
      `Request is send to admin for ${inputValues[index].value} ${filteredObj[0].name} books `
    );
    inputValues[index].value = "";
  }
  const bookToShow = books.map((val, index) => {
    return (
      <div key={val.id} style={{ margin: "10px", padding: "12px" }}>
        <h1>Name Of The Book:{val.name}</h1>
        <h2>Author:{val.author}</h2>
        <h3>
          <input
            type="number"
            name=""
            id=""
            placeholder="number of books needed"
            ref={(input) => {
              inputValues[index] = input;
            }}
          />
        </h3>
        <h6>We have {val.total} books</h6>
        <button onClick={() => handleClick(val.id, index)}>Order</button>
        <hr />
      </div>
    );
  });
  function handleClickForOrders() {
    router.push({
      pathname: "/user-page/orders",
      query: { userName: authDetail.auth.userName },
    },"/user-page/orders");
  }
  return (
    <>
      {bookToShow}
      <h1 onClick={handleClickForOrders}>See Your Orders</h1>
    </>
  );
}

export default userpage;

export const getServerSideProps = async () => {
  // Fetch the JSON data from the API
  const res = await fetch("http://localhost:3000/api/books");
  const jsonData = await res.json();

  // Return the data as part of the props object
  return {
    props: {
      books: jsonData,
    },
  };
};
