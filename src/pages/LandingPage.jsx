import { Search } from "../components/Search";
import { MoviesGrid } from "../components/MoviesGrid";
import { useQuery } from "../hooks/useQuery";

// contiene la busqueda y el grid, en una sola página.
export function LandingPage() {
  // capturamos lo que pusimos en el search, de la url(search input en este caso)
  const query = useQuery();
  // este search lo que hace es, cdo cbia la busqueda » se crea de nuevo el componente.
  const search = query.get("search");
  return (
    <div>
      <Search />
      {/* Si cambio la key de un componente »
      » react automaticamente destruye el componente y lo vuelve a crear.
      Nos sirve para resetear en MoviesGrid los estados de: movies, isLoading, page y hasMore.
      Sino, podemos mover todos los estados al componente padre(LandingPage)
        y pasarle todo, por props a los hijos.
      💡Ahora funciona nuevamente la busqueda desde el input (Después de
          agregar el infinite scroll, funcionaba solo desde la url)
         */}
      <MoviesGrid key={search} search={search} />
      {/* 👆A MoviesGrid, Le pasamos search por props.
      A la función MoviesGrid le pasamos clave, valor. 
      La clave valor llega al componente en forma de objeto.
       » destructuramos el objeto en MoviesGrid.

      
      */}
    </div>
  );
}
