import axios from "axios";

const baseURL = "https://www.googleapis.com/youtube/v3/playlists";

export async function fetchData(access_token, nextPageToken) {
  return await axios
    .get(baseURL, {
      params: {
        part: "snippet",
        mine: "true",
        access_token: access_token,
        pageToken: nextPageToken ? nextPageToken : "",
      },
    })
    .catch((err) => {
      console.log(err);
    });
}
