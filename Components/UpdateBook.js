import React from "react";
import { useRef } from "react";
import { EditAPIData } from "../helper/EditAPIData";

function UpdateBook({ detail, updateState, closeModal }) {
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
    const data = await EditAPIData(
      "http://localhost:3000/api/books",
      newObj,
      detail.id
    );
    updateState(data, "edit");
    closeModal();
  }
  return (
    <>
      <h5 style={{ margin: "5px" }}>Update your book</h5>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder={`${detail.name}`}
          ref={nameRef}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder={`${detail.author}`}
          ref={authorRef}
        />
        <input
          type="number"
          name=""
          id=""
          placeholder={`${detail.total}`}
          ref={totalRef}
        />
        <button>Update</button>
      </form>
    </>
  );
}

export default UpdateBook;
