import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
// https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
import { useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

// rf snippet
export function Search() {
  const query = useQuery();
  const search = query.get("search"); // la primera vez es null.
  // ----------------------------
  /* 💡como funciona useState([])
  const searchState = useState([]);

  const searchText = searchState[0];
  const setSearchText = searchState[1];
  const [searchText, setSearchText] = searchState;
   */
  const [searchText, setSearchText] = useState("");
  // 👆us (useState) snippet.
  // ----------------------------
  // https://reactrouter.com/docs/en/v6/hooks/use-navigate
  // 👇hook para cambio de ruta en url
  const navigate = useNavigate();
  // ----------------------------
  // 👇El estado inicial de isValid es true (cdo se cargue el componente
  const [isValid, setIsValid] = useState(true);
  //  (en useEffect) si la busqueda tiene mas de x characters »
  // » setIsValid(false) para deshabilitar btn en form.
  // ----------------------------
  /* si cambia la busqueda » modificamos el input  » ponemos el que vino por la ruta
  este efecto se ejecuta siempre y cdo haya un cambio en el search
  ue (useEffect) snippets */
  useEffect(() => {
    if (search != null) {
      setSearchText(search || ""); // Al principio el search es null » Sin el OR no funciona.
      if (search.length > 1) {
        setIsValid(false); // cdo search > x
      }
    }
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault(); // don't refresh the form when submit
    navigate("/?search=" + searchText); // hook para cambio de url
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="input 2 or more characters"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          // onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          disabled={!isValid} // lo comenté por funcionalidad al probar app
        >
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
