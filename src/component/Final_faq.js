import Reacts from "react";
import data from "../assests/data/Data.json";
import Accordian from "./Accordian";
import faq from "../assests/images/Saly-41.png";
import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open == index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <div className="overflow-hidden top_faq  " id="faqs">
      <div className="flex justify-center ">
        <h1 className="text-white main text-7xl p-10 ">FAQ's</h1>
      </div>
      <div className="flex justify-between">
        <div className=" text-white flex-col w-[800px] faq   ">
          {data.map((data, index) => {
            return (
              <Accordian
                key={index}
                open={index == open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>

        <div className="pl-48 pt-28 pr-10 max-[1350px]:pl-36 max-[1250px]:pl-28 image_faq">
          <img src={faq} className="image41 h-{50rem} w-{45rem}" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
