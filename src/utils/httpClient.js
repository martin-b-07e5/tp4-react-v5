// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
// https://developers.themoviedb.org/3/discover/movie-discover
// https://developers.themoviedb.org/3/search/search-companies

// https://developers.themoviedb.org/3/getting-started/authentication
// https://developers.themoviedb.org/4/getting-started/authorization

const API = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDIyY2MwMmFmMjkzZDZhMTk3Nzg4ZWVkMjc0YzkzYSIsInN1YiI6IjYyYzM5NjcwM2FmOTI5MDA0YzI5M2RiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fh7ApMHwyMoLlp9NbfKwZ-9MNVi8OMR6BUX_b1XzqxU";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
    // convierto en json el rtdo.
    // (el objeto que me viene en json » lo convierto en un objeto de js)
  }).then((result) => result.json());
}
