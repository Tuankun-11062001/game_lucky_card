import React from "react";
import { deleteItem } from "../store/actions";
import { useStore } from "../store/hook";

export default function DeleteCard({ item, close, index }) {
  const [state, dispatch] = useStore();

  const closeDelete = () => {
    close(false);
  };

  const handleDelete = () => {
    const customData = {
      ...item,
      index,
    };
    dispatch(deleteItem(customData));
    closeDelete();
  };
  return (
    <div className="delete">
      <div className="delete_context">
        <p>Bạn thực sự muốn xoá ?</p>
        <div>
          <button onClick={handleDelete}>Đúng</button>
          <button onClick={closeDelete}>Huỷ</button>
        </div>
      </div>
    </div>
  );
}
