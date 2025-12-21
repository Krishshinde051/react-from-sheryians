import React from "react";
import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [details, setDetails] = useState('');
  const [title, settitle] = useState('');
  const [task, setTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask)
    console.log(copyTask);

    settitle("");
    setDetails("");
  };


  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submithandler(e);
          
        }}
        className=" flex items-start gap-4  lg:w-1/2 p-10 flex-col"
      >
        <h1 className="text-5xl font-bold">Add Notes</h1>
        <input
          type="text"
          className="px-5 w-full py-2  font-medium border-2 outline-none rounded"
          placeholder="enter your task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          className="border-2 w-full h-33 px-5 py-2 outline-none rounded"
          type="text"
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 w-full text-black border-2 px-5 py-2 outline-none rounded">
          Recent Notes!
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2    p-10">
        <h1 className="text-5xl font-extrabold">Your Notes!</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 h-full overflow-auto mt-5">
          {task.map(function(elem,idx) {
            return <div key={idx} className="relative h-60 w-45 flex justify-between flex-col items-start text-black bg-cover rounded-2xl pt-4 pb-5 px-4 bg-[url('https://png.pngtree.com/png-clipart/20230211/ourmid/pngtree-classic-paper-notes-png-image_6593273.png')]">  
              <div>
                <h3 className="leading-tight, text-2xl font-bold " >{elem.title}</h3>
                <p className="mt-2 leading-tight font-medium text-pink-500">{elem.details}</p>
              </div>
              <button className=" p-1  bg-red-500 text-white ml-5">delete note</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  );
};

export default App;
