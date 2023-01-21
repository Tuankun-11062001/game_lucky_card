import React, { useState } from "react";
import bgApp from "../assets/bg.png";
import CreateNew from "../components/CreateNew";
import InfoCard from "../components/InfoCard";
import { useStore } from "../store/hook";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const parent = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};
export default function Setup() {
  const navigate = useNavigate();

  const [state, dispatch] = useStore();
  const { data } = state;

  const [create, setCreate] = useState(false);

  const handleCreate = () => {
    setCreate(true);
  };

  const handleCloseCreate = (value) => {
    setCreate(value);
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="setup"
          variants={parent}
          initial="hide"
          animate="visible"
        >
          <img src={bgApp} className="app_bg" />
          <div className="setup_context">
            <button className="setup_context_home" onClick={goToHome}>
              <AiFillHome />
              <p>Trở về</p>
            </button>
            <h1>Setup</h1>
            <div className="setup_note">
              <button onClick={handleCreate}>Tạo mới</button>
            </div>
            <div className="setup_list">
              {data?.map((item, index) => (
                <InfoCard item={item} key={item.id} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
        {create && <CreateNew close={handleCloseCreate} />}
      </AnimatePresence>
    </>
  );
}
