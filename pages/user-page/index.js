import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
// import { orderBook } from "../Redux/OrderRedux/orderType";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateData } from "../../helper/updateAPI";
import { billPrompt } from "../../helper/billPrompt";
import styles from "../../styles/userPage.module.css";
import Button from "../../Components/UI/Button";

function userpage({ books }) {
  const authDetail = useSelector((state) => state);
  const bookQtyRef = useRef();
  const inputValues = [];
  const router = useRouter();

  function handleClick(id, index) {
    const filteredObj = books.filter((val) => val.id == id);
    const total = inputValues[index].value * filteredObj[0].price;
    // console.log("auth", authDetail);

    const orderDetailObj = {
      bookId: id,
      bill: total,
      userName: authDetail.auth.userName,
      qty: inputValues[index].value,
      status: "pending",
    };
    // console.log("order", orderDetailObj);
    const data = updateData("http://localhost:3000/api/orders", orderDetailObj);
    // alert(
    //   `Request is send to admin for ${inputValues[index].value} ${filteredObj[0].name} books `
    // );
    billPrompt(total, inputValues[index].value, filteredObj[0].name);
    inputValues[index].value = "";
  }
  const bookToShow = books.map((val, index) => {
    return (
      <div className="row bg-light  p-3 mb-2 rounded">
        {/* will plan in future for image */}
        {/* <div className="col-3">Image</div> */}
        <div className="col-9 border-end">
          <h4>{val.name}</h4>
          <p className={`${styles.contentPara}`}>Author-{val.author}</p>
          <p className={`${styles.contentPara}`}>
            <span className="text-danger">{val.total}</span> books left
          </p>
          <p className="mt-2">
            Qty{" "}
            <span>
              <input
                type="number"
                min={1}
                max={10}
                placeholder="0"
                name=""
                id=""
                ref={(input) => {
                  inputValues[index] = input;
                }}
                required
              />
            </span>
          </p>

          <p className="lead">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, quo.
          </p>
        </div>
        <div className="col-3">
          <h5>Rs {val.price}</h5>
          <p className="text-success fw-bold">FREE SHIPPING</p>
          <Button onClick={() => handleClick(val.id, index)}>Buy Now</Button>
        </div>
      </div>
    );
  });
  function handleClickForOrders() {
    router.push(
      {
        pathname: "/user-page/orders",
        query: { userName: authDetail.auth.userName },
      },
      "/user-page/orders"
    );
  }
  return (
    <div className={`p-3  ${styles.userContainer}`}>
      <div className=" d-flex justify-content-center">
        {" "}
        <button className="p-2 m-2 rounded" onClick={handleClickForOrders}>
          See Your Orders
        </button>
      </div>
      <div className="container">{bookToShow}</div>
    </div>
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

{
  /* <div key={val.id} className={` mb-3 ${styles.userCard} w-50  text-light`}>
<h1>Name Of The Book:{val.name}</h1>
<h2>Author:{val.author}</h2>
<h5 style={{color:"red"}}>Price:Rs{val.price} for 10 days</h5>
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

</div> */
}
