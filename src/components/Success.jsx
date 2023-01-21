import React from "react";
import bgApp from "../assets/bg.png";
import Card from "../components/Card";
import { useStore } from "../store/hook";
import Empty from "./Empty";
import { AiFillSetting } from "react-icons/ai";
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

export default function Success() {
  const navigate = useNavigate();
  const [state, dispatch] = useStore();
  const { data } = state;

  const goToSetUp = () => {
    navigate("/setup");
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={parent}
        initial="hide"
        animate="visible"
        exit="hide"
      >
        <img src={bgApp} className="app_bg" />
        {data.length < 1 ? (
          <Empty />
        ) : (
          <div className="app_context">
            <h1>Chúc mừng năm mới 2023</h1>
            <button className="app_context_setting" onClick={goToSetUp}>
              <AiFillSetting />
            </button>

            <div className="app_context_cards">
              {data.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
