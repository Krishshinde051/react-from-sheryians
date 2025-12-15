import React, { useState } from "react";

const App = () => {
  const [text, settext] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by " , text );

    settext('')
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name :" value={text} 
        onChange={(e) => {
          settext(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
