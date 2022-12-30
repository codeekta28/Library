import { addBook } from "./bookType";
import { editBookIncre } from "./bookType";
import { editBookDecre } from "./bookType";
import { deleteBook } from "./bookType";

export function addingBookToDB(bookDetail){
    return{
        type:addBook,
        payload:bookDetail,
    }
}
export function editBookToDBIncre(id){
    return{
        type:editBookIncre,
        payload:{
            id:id
        }
        
    }
}
export function editBookToDBDecre(id){
    return{
        type:editBookDecre,
        payload:{
            id:id
        }
        
    }
}
export function deleteBookToDB(id){
    return{
        type:deleteBook,
        payload:{
            id:id,
        },
    }
}