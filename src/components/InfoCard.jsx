import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import EditCard from "./EditCard";
import { useState } from "react";
import DeleteCard from "./DeleteCard";

export default function InfoCard({ item, index }) {
  const [edit, setEdit] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = (value) => {
    setEdit(value);
  };

  const handleDelete = () => {
    setDeleteCard(true);
  };

  const handleCloseDelete = (value) => {
    setDeleteCard(value);
  };
  return (
    <>
      <div className="infoCard">
        <h2>Lá bài {index + 1}</h2>
        <div className="infoCard_group">
          <p>Nhắn nhủ</p>
          <p>{item.message}</p>
        </div>
        <div className="infoCard_group">
          <p>Số tiền</p>
          <p>{item.money}</p>
        </div>
        <div className="infoCard_controls">
          <button onClick={handleEdit}>
            <FiEdit3 />
          </button>
          <button>
            <AiOutlineDelete onClick={handleDelete} />
          </button>
        </div>
      </div>
      {edit && <EditCard item={item} close={handleCloseEdit} index={index} />}
      {deleteCard && (
        <DeleteCard item={item} close={handleCloseDelete} index={index} />
      )}
    </>
  );
}
