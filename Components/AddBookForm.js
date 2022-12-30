import React, { useRef, useState } from "react";
import {updateData} from "../helper/updateAPI"
import { useDispatch } from "react-redux";
import { addingBookToDB } from "../Redux/BookRedux/bookActionCreater";

function AddBookForm({ addBookAction, updateState }) {

    // const dispatch=useDispatch();
  const nameRef = useRef();
  const authorRef = useRef();
  const totalRef = useRef();
  async function handleSubmit(evt) {
    evt.preventDefault();
    const newObj = {
      name: nameRef.current.value,
      author: authorRef.current.value,
      total: totalRef.current.value,
    };
    // addBookAction(newObj);
    nameRef.current.value = "";
    authorRef.current.value = "";
    totalRef.current.value = "";
    // dispatch(addingBookToDB(newObj))
    const response = await updateData("http://localhost:3000/api/books",newObj);
    updateState(response,"add");

  }


  return (
    <>
  
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="" id="" placeholder="name" ref={nameRef} />
      <input type="text" name="" id="" placeholder="author" ref={authorRef} />
      <input type="number" name="" id="" placeholder="total" ref={totalRef} />
      <button>Add</button>
    </form>
    </>
  );
}


export default AddBookForm;
