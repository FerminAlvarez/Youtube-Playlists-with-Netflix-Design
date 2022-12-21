import { useEffect, useState } from "react";
import { fetchData } from "../services/playlists";
import InfiniteScroll from "react-infinite-scroll-component";
import Row from "./rowvideos";
import Loading from "./loading"

function Rows() {
  const [playlists, setPlaylists] = useState([]);
  const [nextPageToken, setNextPageToken] = useState();
  const [hasMore, setHasMore] = useState(true);

  const accessToken = window.localStorage.getItem('ACCESS_TOKEN');

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
        loader={<Loading />}
        endMessage={
          <p style={{ textAlign: "center" }} className="my-28">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {playlists.map((item, index) => (
          <Row title={item.snippet.localized.title} key={index} id={item.id} />
        ))}
      </InfiniteScroll>
    </>
  );
}

export default Rows;
