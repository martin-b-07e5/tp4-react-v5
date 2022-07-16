import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";
// https://www.npmjs.com/package/react-infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component";

// componente para hacer la grilla.
// https://developers.themoviedb.org/3/getting-started/authentication
export function MoviesGrid() {
  /* 💡como funciona useState([])
  // let movies = [];
  const moviesState = useState([]);
  
  const movies = moviesState[0];
  const setMovies = moviesState[1];
  const [movies, setMovies] = moviesState; */

  // us (useState) snippet
  const [movies, setMovies] = useState([]); // movies vamos a utilizar para el InfiniteScroll
  // 👇Estado para ver si la película está cargando, y la función para setear dicho estado.
  const [isLoading, setIsLoading] = useState(true);
  // 👆El estado inicial de isLoading es true (cdo se cargue
  //  el componente (en el get de useEffect) » la película va a estar cargando).
  const [page, setPage] = useState(1); // trabajando s/esto

  // const location = useLocation();
  // capturamos lo que pusimo en el search, de la url
  const query = useQuery();
  const search = query.get("search"); // Si search esta vacio » llamamos a /discover/movie

  // si cambia la pagina » quiero que se vuelva a ejecutar el efecto

  // https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
  // https://developers.themoviedb.org/3/discover/movie-discover
  // https://developers.themoviedb.org/3/search/search-companies
  // https://developers.themoviedb.org/3/search/search-movies
  // llamada asíncrona para traer las películas del servidor.
  useEffect(() => {
    // este if es para que busque solo si hay mas de x caracteres
    // if (!search || search.length === 0 || search.length > 1) {
    setIsLoading(true); // para el spinner
    // operador ternario (hacer uno u otro)
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page // Buscamos las que coincidan con la condición de busqueda
      : "/discover/movie?page=" + page;

    // si hay un cambio » ejecutamos una busqueda
    // 💡💡💡searchUrl es el "argumento" a que le pasamos
    //  a la función get que tiene el "parametro" path
    get(searchUrl).then((data) => {
      // setMovies(data.results);
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setIsLoading(false); // cdo se terminó de cargar movies(p/ spinner)
    });
    // }
  }, [search, page]); // si cambia search se vuelve a ejecutar el efecto // es un arreglo de dependencias el último array

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      // 👇siempre que actualizamos el estado, a partir de un estado anterior »
      // » usar una función. (no usar "page" en este caso)
      // Porque la actualización se hace de forma asíncrona » puede dar errores.
      next={() => setPage((prevPage) => prevPage + 1)} // le pasamos una función
      hasMore={true} // por ahora en true. Después lo calculamos dinamicamente según la información que tengamos.
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
