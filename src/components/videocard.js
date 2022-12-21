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
      class={
        "card w-[266px] inline-block cursor-pointer relative p-2 carousel-item transform transition duration-500 hover:scale-110 hover:bg-gray-800" 
          + (isHovering ? "shadow-xl image-full" : "")
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      
    >
      <figure className="rounded-lg">
        <img src={props.image} />
      </figure>
      {isHovering && (
        <div class="card-body">
          <h2 class="card-text font-medium text-white">{props.title}</h2>
          <div class="card-actions justify-center">
            <a class="btn btn-primary" href={props.link} target="_blank">
              Watch Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
