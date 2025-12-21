
import { Bookmark } from 'lucide-react';

const   Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            <p>Save</p> <Bookmark />
          </button>
        </div>

        <div className="center">
          <div className="center-high">
            <h4>{props.company}</h4>
            <p>{props.date}</p>
          </div>

          <h3>{props.position} </h3>

          <div className="center-low">
            <h5>{props.type} </h5>
            <h6>{props.experience }</h6>
          </div>  
        </div>

        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <h6>{props.place}</h6>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
