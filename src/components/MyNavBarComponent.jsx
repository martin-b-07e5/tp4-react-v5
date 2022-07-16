import { Link } from "react-router-dom";

export function MyNavBarComponent() {
  return (
    <div className="myNabvar--pendingStyle">
      <nav>
        <ul>
          <li>
            <Link to="/aboutUs">About us</Link>
          </li>
          <li>
            <Link to="contactUs">contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
