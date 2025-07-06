import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:0.9}}
      className="w-50 flex-shrink-0 relative h-70 bg-zinc-800 rounded-[20px] text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 font-semibold">{data.desc}</p>
      <div className="absolute bottom-0 w-full left-0  ">
        <div className="footer flex items-center justify-between p-5  ">
          <h5>{data.filesize}</h5>
          <span>{data.close ? <IoCloseSharp /> : <RiDownload2Fill />}</span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag ${
              data.tag.tagColor === "blue" ? "bg-blue-300" : "bg-green-300"
            } w-full flex  justify-center py-2`}
          >
            <h1>{data.tag.tagTitle}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
