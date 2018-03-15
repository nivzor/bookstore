import _ from "lodash";
import { FETCH_BOOKS, FETCH_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_BOOK:
      return _.omit(state, action.payload);
    case FETCH_BOOK:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_BOOKS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
