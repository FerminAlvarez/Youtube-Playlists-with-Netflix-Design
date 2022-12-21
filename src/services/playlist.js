import axios from "axios";

const baseURL = "https://www.googleapis.com/youtube/v3/playlistItems";

export async function fetchData(access_token, nextPageToken, playlistId) {
  return await axios
    .get(baseURL, {
      params: {
        part: "snippet",
        access_token: access_token,
        pageToken: nextPageToken ? nextPageToken : "",
        playlistId: playlistId
      },
    })
    .catch((err) => {
      console.log(err);
    });
}
