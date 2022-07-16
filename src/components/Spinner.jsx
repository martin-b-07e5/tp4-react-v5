// rf snippet
// https://www.npmjs.com/package/react-icons
// npm install react-icons
// https://react-icons.github.io/react-icons/search?q=spinner

import { FaSpinner } from "react-icons/fa";
// import styles from "./MovieDetails.module.css";
import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={40} />
    </div>

    // <div>
    //   <h1 style={{ textAlign: "center", color: "lightgray" }}>
    //     <FaSpinner />
    //   </h1>
    // </div>
  );
}
