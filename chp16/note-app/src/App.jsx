import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className=" flex items-start p-10 flex-col gap-5  ">
        <input
          type="text"
          className="px-5 w-1/2 py-2 border-2 rounded"
          placeholder="enter your task"
        />

        <input
          className="border-2 w-1/2 px-5 py-2 rounded"
          type="text"
          placeholder="Write details"
        />

        <button className="bg-white w-1/2 text-black border-2 px-5 py-2 rounded">Add Notes!</button>
      </form>
    </div>
  );
};

export default App;
