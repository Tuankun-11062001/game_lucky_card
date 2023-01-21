import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./constains";

const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

const editItem = (payload) => {
  return {
    type: EDIT_ITEM,
    payload,
  };
};

const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};

export { addItem, editItem, deleteItem };
