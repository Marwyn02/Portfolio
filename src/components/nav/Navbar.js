import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="bg-black/90 py-2.5">
      <Link to="/Portfolio/">
        <h1 className="text-center text-2xl md:text-3xl text-white font-extrabold italic">
          Marwyn
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
