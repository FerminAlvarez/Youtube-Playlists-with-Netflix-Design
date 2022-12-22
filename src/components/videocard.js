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
        "card w-[330px] inline-block cursor-pointer relative p-2 carousel-item transform transition duration-500 hover:scale-110 "
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a href={props.link} target="_blank" rel="noreferrer">
        <figure className="rounded-lg">
          <img src={props.image} alt={props.title} />
        </figure>
        {isHovering && (
          <div className="card-body">
            <h2 className="card-text font-medium dark:text-white text-black">{props.title}</h2>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" >
                Watch Now
              </button>
            </div>
          </div>
        )}
      </a>
    </div>
  );
}

export default MovieCard;
