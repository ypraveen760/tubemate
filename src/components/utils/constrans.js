const GOOGLE_API_KEY = "AIzaSyDCy6re-6TE43IIISIYC98z34tampa6cN0";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
