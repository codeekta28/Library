import React from "react";
import { editBookToDBIncre } from "../Redux/BookRedux/bookActionCreater";
import { editBookToDBDecre } from "../Redux/BookRedux/bookActionCreater";
import { deleteBookToDB } from "../Redux/BookRedux/bookActionCreater";
import { addingBookToDB } from "../Redux/BookRedux/bookActionCreater";
import { useDispatch } from "react-redux";
import { deleteData } from "../helper/deleteData";
import { useState } from "react";
import Button from "./UI/Button";
import AddBookForm from "./AddBookForm";
import UpdateBook from "./UpdateBook";
import styles from "../styles/bookCollection.module.css";
import UpdateBookModal from "./UpdateBookModal";
function BookCollectionForAdmin({ bookDetail, updateState }) {
  const dispath = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function handleDelete() {
    // dispath(deleteBookToDB(bookDetail.id))
    const deleteDataRecieve = await deleteData(bookDetail.id);
    updateState(deleteDataRecieve, "delete");
    alert("Book is going to get deleted from Library")
  }
  function handleAddBook() {
    setShowForm(true);
  }
  function handleUpdate() {
    setShowModal(true);
  }

  function handleCloseModal(){
    setShowModal(false)
  }

  return (
  
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className={`card-body ${styles.cardContainer}`}>
              <h2 className="card-title">{bookDetail.name}</h2>
              <h5 className="card-text ">Author: {bookDetail.author}</h5>
              <h5 className="card-text">Price: Rs{bookDetail.price}</h5>
              <h5 className="card-text">Stock:{bookDetail.total} books</h5>
              <div className="btn-group" role="group">
                <Button onClick={handleDelete}>Delete</Button>
                <Button  onClick={handleUpdate}>Update</Button>
                <UpdateBookModal
                  updateState={updateState}
                  detail={bookDetail}
                  show={showModal}
                  closeModal={handleCloseModal}
                  onHide={handleCloseModal}
                 
                />
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h5>
        <button
          style={{ padding: "5px 20px", margin: "5px" }}
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </h5>
      {showForm && <AddBookForm updateState={updateState} />} */}
    </div>
  );
}

export default BookCollectionForAdmin;
// background-color: #8b071a;
//     color: white;
//     border-radius: 11px;
