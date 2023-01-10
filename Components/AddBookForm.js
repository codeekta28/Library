import React, { useRef, useState } from "react";
import {updateData} from "../helper/updateAPI"
import { useDispatch } from "react-redux";
import { addingBookToDB } from "../Redux/BookRedux/bookActionCreater";

function AddBookForm({  updateState ,closeForm}) {

    // const dispatch=useDispatch();
  const nameRef = useRef();
  const authorRef = useRef();
  const totalRef = useRef();
  const priceRef = useRef();
  async function handleSubmit(evt) {
    evt.preventDefault();
    const newObj = {
      name: nameRef.current.value,
      author: authorRef.current.value,
      total: totalRef.current.value,
      price:priceRef.current.value,
    };
    // addBookAction(newObj);
    nameRef.current.value = "";
    authorRef.current.value = "";
    totalRef.current.value = "";
    priceRef.current.value = "";

    // dispatch(addingBookToDB(newObj))
    const response = await updateData("http://localhost:3000/api/books",newObj);
    updateState(response,"add");
    alert("Book is added to Library")
    closeForm();

  }


  return (
    <>
  
    <form action="" className="" onSubmit={handleSubmit}>
      <input className="p-1" type="text" name="" id="" placeholder="name" ref={nameRef} />
      <input className="p-1" type="text" name="" id="" placeholder="author" ref={authorRef} />
      <input className="p-1" type="number" name="" id="" placeholder="total" ref={totalRef} />
      <input className="p-1" type="number" name="" id="" placeholder="price" ref={priceRef} />
      <button className="btn btn-outline-light m-3 px-5">Add</button>
    </form>
    </>
  );
}


export default AddBookForm;
