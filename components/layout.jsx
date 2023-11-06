// Top Menu Navbar
import TopMenuNavbar from "components/TopMenuNavbar/TopMenuNavbar";
import Footer from "components/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <TopMenuNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
