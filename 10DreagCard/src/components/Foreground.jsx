import React, { useRef } from "react";
import Card from "./Card";
function Foreground() {
  const containerRef = useRef("");
  const data = [
    {
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos amet quisquam?",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde maxime illum quia!",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "View", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus et voluptas maxime.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed ratione distinctio!",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
    
  ];
  return (
    <div  ref={containerRef} className="w-full h-screen fixed z-[3] top-0 left-0 flex flex-wrap p-5 gap-3">
      {data.map((item, index) => (
        <Card data={item} key={index} reference={containerRef} />
      ))}
    </div>
  );
}

export default Foreground;
