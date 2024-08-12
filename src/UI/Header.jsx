import { Link } from "react-router-dom";
import SearchOrder from "../Features/Order/searchOrder";

function Header() {
  return (
    <header>
      <Link to={"/"}>Fast React Co.</Link>
      <SearchOrder />
      <p>Arjun Liljo</p>
    </header>
  );
}

export default Header;
