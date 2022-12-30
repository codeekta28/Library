import { orderBook } from "./orderType";

export function orderingBookFn(bookDetail)
{
    return{
        type:orderBook,
        payload:bookDetail
    }
}