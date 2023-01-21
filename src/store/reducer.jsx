import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./constains";
import { dataCatMotion } from "../data/dataCat";

const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const random = Math.floor(Math.random() * dataCatMotion.length);

      const catImg = dataCatMotion[random].image;
      const catText = dataCatMotion[random].text;

      const customData = {
        ...action.payload,
        catImg,
        catText,
      };
      return {
        ...state,
        data: [...state.data, customData],
      };
    case EDIT_ITEM:
      const arr = state.data;
      arr[action.payload.index] = action.payload;
      return {
        ...state,
        data: arr,
      };
    case DELETE_ITEM:
      const arr2 = state.data;
      const newArr = arr2.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        data: newArr,
      };
    default:
      return {
        ...state,
      };
  }
};

export { dataReducer };
