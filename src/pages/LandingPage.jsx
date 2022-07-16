import { Search } from "../components/Search";
import { MoviesGrid } from "../components/MoviesGrid";

// contiene la busqueda y el grid, en una sola página.
export function LandingPage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}
