import { useEffect, useState, useRef } from "react";
import { fetchData } from "../services/playlist";
import VideoCard from "./videocard";

let accessToken =
  "ya29.a0AX9GBdVehuvrOv0onOiSXveCLe7db74De__hVchrx3gGkT-FrZnJz5cGqwiN2sy6evbsoivUzJ1aWsUitMO9Vp8N76q3wNtclVCtynqU9jM-BbdfhB9nbJC9JZcZq-LjkFey1ljoyC_M9RWrEe9eYAWF5Rv2tQaCgYKAVoSARISFQHUCsbCGzGgTcV_b17d_Mk7u1GuUg0165";

function Row(props) {
  const containerRef = useRef();

  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState();
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getData();
    if(hasMore)
      getData();
  }, []);

  async function getData() {
    let response = await fetchData(accessToken, nextPageToken, props.id);
    setNextPageToken(response.data.nextPageToken);
    setVideos(videos.concat(response.data.items));
    setHasMore(response.data.nextPageToken ? true : false);
  }

  const scrollRow = (scrollOffset) => {
    if (scrollOffset > 0 && hasMore) getData();
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <h2 className="text-white font-semibold text-3xl px-4 text-left mx-20">
        {props.title} - {props.id}
      </h2>
      <div className="relative flex items-center mx-5 pb-2">
        <button
          className="btn btn-circle"
          onClick={() => scrollRow(-containerRef.current.offsetWidth)}
        >
          ❮
        </button>
        <div
          className="carousel carousel-center rounded px-1 py-3 mx-5 transition-height duration-500 h-56 hover:h-72"
          id="id-1"
          ref={containerRef}
        >
          {videos.map((item, id) => (
            JSON.stringify(item.snippet.thumbnails) !== '{}' &&
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
