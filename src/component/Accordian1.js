import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import line from "../assests/images/Line 1.png";
const Accordian = ({ open, toggle, title, desc }) => {
  return (
    <div className="flex-col space-y-4">
      <h1
        className="text-2xl text-white ml-14 flex justify-between mt-4 faq_q"
        onClick={toggle}
      >
        <p className="text-white text-3xl faq_title">{title}</p>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </h1>
      <Collapse isOpened={open}>
        <div className="bg-newcolor text-2xl ml-14 w-[500px] faq_question ">
          {desc}
        </div>
      </Collapse>
      <img src={line} className="w-[800px] ml-14 faq_line" />
    </div>
  );
};

export default Accordian;
