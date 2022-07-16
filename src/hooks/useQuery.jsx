import { useLocation } from "react-router-dom";

// custom hook that builds on useLocation to parse
// the query string for you
// 💡Vemos si existen cambios en la ruta
// (dentro del hook usamos otro hook)
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
