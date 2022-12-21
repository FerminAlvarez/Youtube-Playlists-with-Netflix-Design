import { useEffect, useState, useRef } from "react";
import { fetchData } from "../services/playlist";
import VideoCard from "./videocard";

function Row(props) {
  const containerRef = useRef();

  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState();
  const [hasMore, setHasMore] = useState(true);

  const accessToken = window.localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetchData(accessToken, nextPageToken, props.id);
    setNextPageToken(response.data.nextPageToken);
    setVideos(videos.concat(response.data.items));
    setHasMore(response.data.nextPageToken ? true : false);
  }

  async function scrollRow(scrollOffset) {
    if (scrollOffset > 0 && hasMore) await getData();
    setTimeout(() => {
      containerRef.current.scrollLeft += scrollOffset;
    }, 100);
  }

  return (
    <>
      <h2 className="dark:text-white text-black font-semibold text-3xl px-4 text-left mx-20  mt-5">
        {props.title}
      </h2>
      <div className="relative flex items-center mx-5 pb-2">
        <button
          className="btn btn-circle"
          onClick={() => scrollRow(-containerRef.current.offsetWidth)}
        >
          ❮
        </button>
        <div
          className="carousel carousel-center rounded px-1 py-3 mx-5 transition-height duration-500 h-56 hover:h-[400px] snap-none"
          id="id-1"
          ref={containerRef}
        >
          {videos.map(
            (item, id) =>
              JSON.stringify(item.snippet.thumbnails) !== "{}" && (
                <VideoCard
                  image={item.snippet.thumbnails.medium.url}
                  title={item.snippet.title}
                  link={
                    "https://www.youtube.com/watch?v=" +
                    item.snippet.resourceId.videoId
                  }
                  id={id}
                />
              )
          )}
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
