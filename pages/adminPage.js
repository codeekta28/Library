import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookCollectionForAdmin from "../Components/BookCollectionForAdmin";
// const dummy_Data=[
//     {id:1,name:"next",author:"ekta",total:12},{id:2,name:"react",author:"kushagra",total:14},{id:3,name:"Js",author:"sundar",total:22}
// ]

function adminPage({books}) {
  // const data = useSelector((data) => data);
 const [stateBooks,setStateBooks]=useState(null)
 const [test, setTest] = useState(null);
 
 useEffect(() => {
  // console.log(books);
  setStateBooks(books);
 }, []);

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
  setStateBooks(newBook)
}
 }
 
  return (
    <>
      <h1>This is an admin page</h1>
      {stateBooks && stateBooks.map((item) => (
        <BookCollectionForAdmin updateState={updateStateFn} bookDetail={item}/>
      ))}
    <Link href="/adminorders">
    <h2>Go to Orders Page</h2>
    </Link>
    </>
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
