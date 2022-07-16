import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // esto es un hook
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
// import { useQuery } from "../hooks/useQuery";

// componente para mostrar detalles de la película.
export function MovieDetails() {
  // para capturar el identificador » usamos el hook "useParams"
  // https://reactrouter.com/docs/en/v6/hooks/use-params
  const { movieId } = useParams();
  // 👇Estado para ver si la película está cargando, y la función para setear dicho estado.
  const [isLoading, setIsLoading] = useState(true);
  // 👆El estado inicial de isLoading es true (cdo se cargue el componente (en el get de useEffect) » la película va a estar cargando).
  const [movie, setMovie] = useState(null);

  // llamada asíncrona, para traer pelicula con identificador "movieId" del servidor.
  useEffect(() => {
    setIsLoading(true); // para spinner
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false); // cdo se terminó la carga de la pelicula.
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const imdbUrl = "https://www.imdb.com/title/" + movie.imdb_id;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong> {movie.title}
        </p>
        <p>
          <strong>Release: </strong> {movie.release_date}
        </p>
        <p>
          <strong>Genre: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}.
          {/* 👆convertimos el arreglo de objetos a un arreglo de texto */}
          {/* si concateno y no utilizo .join  » me agrega una coma al final */}
        </p>
        <p>
          <strong>IMDb RATING:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <a href={movie.homepage} target="_blank" rel="noreferrer">
            {/* {movie.homepage} */} {/* no se ve bien en mobile */}
            <strong>Homepage</strong>
          </a>
        </p>
        <p>
          <a href={imdbUrl} target="_blank" rel="noreferrer">
            {/* {imdbUrl} */}
            <strong>IMDB</strong>
          </a>
        </p>
      </div>
    </div>
  );
}
