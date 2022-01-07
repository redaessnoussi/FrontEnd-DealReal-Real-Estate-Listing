// Top Menu Navbar
import TopMenuNavbar from "../components/TopMenuNavbar/TopMenuNavbar";

function Layout({ children }) {
  return (
    <>
      <TopMenuNavbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
