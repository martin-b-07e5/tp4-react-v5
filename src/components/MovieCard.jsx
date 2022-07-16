// Link es un componente de react-router-dom. Crea un enlace manejado por react-router-dom.
// cdo hacemos click en la tarjeta, entra a dicha película sin refrescar el navegador, y la url cambia.
// cdo seleccionamos una película » vá a la ruta "/movies/" y le pasa el identificador "movie.id" (ver App.jsx)
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
