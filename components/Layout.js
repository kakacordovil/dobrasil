import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="overflow-x-hidden min-h-screen bg-brand-greenSoft">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout
