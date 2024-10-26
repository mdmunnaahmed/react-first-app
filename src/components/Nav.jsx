import Account from "./Account";
import Brand from "./Brand";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <Brand />
        <Account />
      </nav>
    </div>
  );
};

export default Nav;
