import { orderBook } from "./orderType";
let initialState = [];
const orderReducer = (state = initialState, action) => {
  if (action.type === orderBook) {
    if (state.length === 0) {
      const newState = {
        id: 1,
        bookName: action.payload.bookName,
        userId: action.payload.user,
        quantity: action.payload.quantity,
        orderStatus: action.payload.orderStatus,
      };

      return [...state, newState];
    }
    if (state.length > 0) {
      console.log("full");
      let highestId = 0;
      for (const obj of state) {
        if (obj.id > highestId) {
          highestId = obj.id;
        }
      }

      const newState = {
        id: highestId + 1,
        bookName: action.payload.bookName,
        userId: action.payload.user,
        quantity: action.payload.quantity,
        orderStatus: action.payload.orderStatus,
      };
      console.log(state)
      return [...state, newState];
    }
  }

  return state;
};
export default orderReducer;
