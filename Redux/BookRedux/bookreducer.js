import { addBook } from "./bookType";
import { editBookIncre } from "./bookType";
import { editBookDecre } from "./bookType";
import { deleteBook } from "./bookType";

const initialState = [

];
const bookreducer = (state = initialState, action) => {
  if (action.type === addBook) {
    const newId = Math.max(...state.map((item) => item.id)) + 1;
    const newObj = {
      id: newId,
      name: action.payload.name,
      author: action.payload.author,
      total: action.payload.total,
    };
    const newState = [...state, newObj];
    return newState;
  } else if (action.type == editBookIncre) {
    const updatedState = state.map((val) => {
      if (val.id === action.payload.id) {
        return { ...val, total: val.total + 1 };
      }
      return val;
    });
    return [...updatedState];
  } else if (action.type == editBookDecre) {
    const updatedState = state.map((val) => {
      if (val.id === action.payload.id) {
        return { ...val, total: val.total - 1 };
      }
      return val;
    });
    return [...updatedState];
  } else if (action.type === deleteBook) {
    const newState = state.filter((val) => val.id !== action.payload.id);
    return newState;
  }

  return state;
};
export default bookreducer;
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
