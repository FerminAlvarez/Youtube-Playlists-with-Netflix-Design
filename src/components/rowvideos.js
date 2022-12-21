import { useEffect, useState, useRef } from "react";
import data from "../services/playlist";
import VideoCard from "./videocard";

function Row() {
  const [videos, setVideos] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    getData();
  });

  function getData() {
    setVideos(data);
  }

  const scrollRow = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <h2 className="text-white font-semibold text-3xl px-4 text-left mx-20">Playlist 1</h2>
      <div className="relative flex items-center mx-5 pb-2">
        <button
          className="btn btn-circle"
          onClick={() => scrollRow(-containerRef.current.offsetWidth)}
        >
          ❮
        </button>
        <div
          class="carousel carousel-center rounded px-1 py-3 mx-5 transition-height duration-500 h-48 hover:h-72"
          id="id-1"
          ref={containerRef}
        >
          {videos.map((item, id) => (
            <VideoCard
              image={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              link={
                "https://www.youtube.com/watch?v=" +
                item.snippet.resourceId.videoId
              }
              id={id}
            />
          ))}
        </div>
        <button
          className="btn btn-circle"
          onClick={() => scrollRow(containerRef.current.offsetWidth)}
        >
          ❯
        </button>
      </div>
    </>
  );
}

export default Row;
