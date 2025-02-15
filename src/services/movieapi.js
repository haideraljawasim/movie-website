import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmI5ZGRiYTE2ZTNmZjU5NDQwMDVlZmI4OTE5N2I0NCIsIm5iZiI6MTczOTQ2MzQ0NS4yNzUsInN1YiI6IjY3YWUxYjE1M2VlNzA4MzI3YzM3MTM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYn2gbX6fYsl1jAWiX4vB0YNysQlfy8lt7cDrigqkwI",
  },
};

export async function getMovies() {
  try {
    const response = await axios.get(BASE_URL, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
export async function fetchTrailer(movieID) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      options
    );

    const data = await response.data;
    const trailer = data.results.find((vid) => vid.type == "Trailer");
    console.log(trailer.key);
    if (trailer) return trailer.key;
  } catch (e) {
    console.log(e);
  }
}
