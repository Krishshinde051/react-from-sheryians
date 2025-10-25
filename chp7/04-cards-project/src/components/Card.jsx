import React from "react";
import { Bookmark } from 'lucide-react';

const   Card = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://imgs.search.brave.com/nKz_jFlZWYDvJs7oFiBzJECedcrSHw9cOGwsTgYKZXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc"
            alt=""
          />
          <button>
            <p>Save</p> <Bookmark />
          </button>
        </div>

        <div className="center">
          <div className="center-high">
            <h4>Amazon</h4>
            <p>5 days ago</p>
          </div>

          <h3>Senior UI/UX Designer</h3>

          <div className="center-low">
            <h5>Part-Time</h5>
            <h6>Senior Level</h6>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <h6>Mumbai,India</h6>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
