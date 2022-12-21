import { useEffect, useState } from "react";
import { fetchData } from "../services/playlists";
import InfiniteScroll from "react-infinite-scroll-component";
import Row from "./rowvideos";

let accessToken = "ya29.a0AX9GBdVehuvrOv0onOiSXveCLe7db74De__hVchrx3gGkT-FrZnJz5cGqwiN2sy6evbsoivUzJ1aWsUitMO9Vp8N76q3wNtclVCtynqU9jM-BbdfhB9nbJC9JZcZq-LjkFey1ljoyC_M9RWrEe9eYAWF5Rv2tQaCgYKAVoSARISFQHUCsbCGzGgTcV_b17d_Mk7u1GuUg0165";

function Rows() {
  const [playlists, setPlaylists] = useState([]);
  const [nextPageToken, setNextPageToken] = useState();
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetchData(accessToken, nextPageToken);
    setNextPageToken(response.data.nextPageToken);
    setPlaylists(playlists.concat(response.data.items));
    setHasMore(response.data.nextPageToken ? true : false);
  }

  return (
    <>
      <InfiniteScroll
        dataLength={playlists.length}
        next={getData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {playlists.map((item, index) => (
          <Row title={item.snippet.localized.title} key={index} id={item.id}/>
        ))}
      </InfiniteScroll>
    </>
  );
}

export default Rows;
