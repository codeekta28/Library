import React from "react";
import { editBookToDBIncre } from "../Redux/BookRedux/bookActionCreater";
import { editBookToDBDecre } from "../Redux/BookRedux/bookActionCreater";
import { deleteBookToDB } from "../Redux/BookRedux/bookActionCreater";
import { addingBookToDB } from "../Redux/BookRedux/bookActionCreater";
import { useDispatch } from "react-redux";
import { deleteData } from "../helper/deleteData";
import { useState } from "react";
import AddBookForm from "./AddBookForm";
import UpdateBook from "./UpdateBook";
function BookCollectionForAdmin({ bookDetail, updateState }) {
  const dispath = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // function handleClickPlus() {
  //   dispath(editBookToDBIncre(bookDetail.id));
  // }
  // function handleClickMinus(){
  //   dispath(editBookToDBDecre(bookDetail.id))
  // }
  async function handleDelete() {
    // dispath(deleteBookToDB(bookDetail.id))
    const deleteDataRecieve = await deleteData(bookDetail.id);
    updateState(deleteDataRecieve, "delete");
  }
  function handleAddBook() {
    setShowForm(true);
  }
  function handleUpdate() {
    setShowUpdateForm(true);
  }

  return (
    <div style={{margin:"12px",padding:"10px"}}>
      <h2>book-{bookDetail.name}</h2>
      <h3>author={bookDetail.author}</h3>
      <h4>Total Books-{bookDetail.total}</h4>
      {/* <h5>
        <button
          style={{ padding: "5px 20px", margin: "5px" }}
          onClick={handleClickPlus}
        >
          +
        </button>
        <button style={{ padding: "5px 20px", margin: "5px" }} onClick={handleClickMinus}>-</button>
      </h5> */}
      <h5>
        <button
          style={{ padding: "5px 20px", margin: "5px" }}
          onClick={handleUpdate}
        >
          Update Book
        </button>
      </h5>
      {showUpdateForm && <UpdateBook updateState={updateState} detail={bookDetail}/>}
      <h5>
        <button
          style={{ padding: "5px 20px", margin: "5px" }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </h5>
      <h5>
        <button
          style={{ padding: "5px 20px", margin: "5px" }}
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </h5>
      {showForm && <AddBookForm updateState={updateState} />}
      <hr />
    </div>
  );
}

export default BookCollectionForAdmin;
