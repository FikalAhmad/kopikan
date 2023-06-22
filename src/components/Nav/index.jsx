import { navContainer } from "./styles";

const Navbar = () => {
  return (
    <nav className={navContainer}>
      <div>
        <h1>KOPIKAN</h1>
      </div>
      <ul className="list--menu">
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
      </ul>
    </nav>
  );
};

export default Navbar;
