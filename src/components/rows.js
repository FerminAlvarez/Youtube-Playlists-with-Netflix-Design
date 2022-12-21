import { useEffect, useState } from "react";
import { fetchData } from "../services/playlists";
import InfiniteScroll from "react-infinite-scroll-component";
import Row from "./rowvideos";

let accessToken = "ya29.a0AX9GBdUr2Q-km9JaE8FfrspmX8u767ngDOGN7vQ04x1U69_yJ21QRQZRAendD5ab4OlhiPZZf_lGhto2UcWRLIHEeMBxd1h-aaooX76xNNpnKvEQcQ9N1sWu1rQuQ8KEbsF-RFQvXP0q4C0Jy5WPxuh1p7H7HAaCgYKAUoSARISFQHUCsbCDQxLQYxzbtHz62OuKEkjKw0165";

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
