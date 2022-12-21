import { useState } from "react";

function MovieCard(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={
        "card w-[330px] inline-block cursor-pointer relative p-2 carousel-item transform transition duration-500 hover:scale-105 hover:bg-gray-800" 
          + (isHovering ? "shadow-xl image-full" : "")
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      
    >
      <figure className="rounded-lg">
        <img src={props.image} />
      </figure>
      {isHovering && (
        <div className="card-body">
          <h2 className="card-text font-medium text-white">{props.title}</h2>
          <div className="card-actions justify-center">
            <a className="btn btn-primary" href={props.link} target="_blank">
              Watch Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
