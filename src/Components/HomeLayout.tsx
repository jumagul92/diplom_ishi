import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import Top from "./Top";

function HomeLayout() {
  return (
    <>
      <header className="header">
        <Top />
        <Nav />
      </header>
      <main className="main">
       <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
