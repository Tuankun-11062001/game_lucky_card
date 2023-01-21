import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useStore } from "../store/hook";
import { editItem } from "../store/actions";

export default function EditCard({ close, item, index }) {
  const [state, dispatch] = useStore();

  const [formData, setFormData] = useState({
    id: item.id,
    message: item.message,
    money: item.money,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    close(false);
  };

  const handleSubmit = () => {
    const customData = {
      ...formData,
      index,
    };
    dispatch(editItem(customData));
    handleClose();
  };

  return (
    <div className="edit">
      <div className="edit_context">
        <div className="edit_context_head">
          <h2>Chỉnh sửa</h2>
          <button onClick={handleClose}>
            <IoIosClose />
          </button>
        </div>
        <div className="edit_context_form">
          <div className="edit_context_form_group">
            <p>Lời nhắn</p>
            <input
              placeholder="lời nhắn"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="edit_context_form_group">
            <p>Số tiền</p>
            <input
              placeholder="số tiền"
              type="number"
              name="money"
              value={formData.money}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}>Hoàn tất</button>
        </div>
      </div>
    </div>
  );
}
