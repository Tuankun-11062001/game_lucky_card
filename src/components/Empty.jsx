import React from "react";
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

const child = {
  hide: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
};
export default function Empty() {
  const navigate = useNavigate();

  const goSetup = () => {
    navigate("/setup");
  };
  return (
    <AnimatePresence>
      <motion.div
        className="empty"
        variants={parent}
        initial="hide"
        animate="visible"
        exit="hide"
      >
        <motion.div className="empty_context" variants={child}>
          <h3>Message</h3>
          <p>Hiện tại bạn chưa có mệnh giá nào.</p>
          <button onClick={goSetup}>Điền mệnh giá</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
