import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import uniqid from "uniqid";
import { useStore } from "../store/hook";
import { addItem } from "../store/actions";

export default function CreateNew({ close }) {
  const [state, dispatch] = useStore();

  const [formData, setFormData] = useState({
    id: uniqid(),
    message: "",
    money: "",
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
    dispatch(addItem(formData));
    handleClose();
  };
  return (
    <div className="create">
      <div className="create_context">
        <div className="create_context_head">
          <h2>Tạo mới</h2>
          <button onClick={handleClose}>
            <IoIosClose />
          </button>
        </div>
        <div className="create_context_form">
          <div className="create_context_form_group">
            <p>Lời nhắn</p>
            <input
              placeholder="lời nhắn"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="create_context_form_group">
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
