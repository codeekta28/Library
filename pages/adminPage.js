import Link from "next/link";
import styles from "../styles/adminPage.module.css"
import React, { useEffect, useState } from "react";
import Button from "../Components/UI/Button";
import { useSelector } from "react-redux";
import BookCollectionForAdmin from "../Components/BookCollectionForAdmin";
import AddBookForm from "../Components/AddBookForm";
// const dummy_Data=[
//     {id:1,name:"next",author:"ekta",total:12},{id:2,name:"react",author:"kushagra",total:14},{id:3,name:"Js",author:"sundar",total:22}
// ]

function adminPage({books}) {
  // const data = useSelector((data) => data);
 const [stateBooks,setStateBooks]=useState(null)
 const [test, setTest] = useState(null);
 const [showModal, setShowModal] = useState(false);
 
 useEffect(() => {
  // console.log(books);
  setStateBooks(books);
 }, []);
// updating state according to add,delete or update button
 function updateStateFn(newBook,type){
  // console.log("newBook",newBook)
if(type==="add"){
  setStateBooks((prevState)=>{
    let newO = Object.assign([], prevState);
    newO.push(newBook);
    return newO;
  })
}
if(type==="delete"){
  setStateBooks(newBook)
}
if(type==="edit"){
  console.log("Inside edit")
  setStateBooks(newBook)
}
 }
//  adding new Book
function handleAddBook(){
  setShowModal(true);

}
function closeForm(){
  setShowModal(false)
}
 
  return (
    <div className={styles.adminContainer}>
   <h1 className="text-light text-center">Collection of books</h1>
  <div className={styles.bookCollection}>
  {stateBooks && stateBooks.map((item) => (
        <BookCollectionForAdmin updateState={updateStateFn} bookDetail={item}/>
      ))}
  </div>
  {/* <Button className="btn btn-outline-light">Add Book</Button> */}
  <button type="button" onClick={handleAddBook} className="btn btn-outline-light mt-5">Add New Book</button>
  {showModal && <AddBookForm updateState={updateStateFn} closeForm={closeForm}/>}
    <Link href="/adminorders" className="text-decoration-none">
  <button  className="btn btn-outline-light mt-2 d-block">Orders</button>
    </Link>
    </div>
  );
}

export const getServerSideProps = async () => {
  // Fetch the JSON data from the API
  const res = await fetch('http://localhost:3000/api/books');
  const jsonData = await res.json();

  // Return the data as part of the props object
  return {
    props: {
     books: jsonData,
    },
  };
};


export default adminPage;
