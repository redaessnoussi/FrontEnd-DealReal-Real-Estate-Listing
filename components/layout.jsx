// Top Menu Navbar
import TopMenuNavbar from "components/TopMenuNavbar/TopMenuNavbar";
import Footer from "components/Footer/Footer";
import style from "styles/main.module.scss";

function Layout({ children }) {
  return (
    <>
      <TopMenuNavbar style={style} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
