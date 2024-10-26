import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
