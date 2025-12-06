import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 lef-0 h-full w-full text-black  p-8 flex flex-col justify-between">
      <h2 className="bg-white  text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center">
        {props.id+1}
      </h2>
      <div>
        <p className="text-xl leading-relaxed text-white mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat
          id aliquid consequuntur delectus.
        </p>
        <div className="flex justify-around">
          <button  style={{backgroundColor:props.color}} className=" text-white font-medium px-7 py-2 rounded-full">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className=" text-white font-medium px-4 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
