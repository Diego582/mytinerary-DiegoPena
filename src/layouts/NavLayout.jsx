import NavBar from "../components/NavBar";

const NavLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default NavLayout;
