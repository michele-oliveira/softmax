import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Customers from "./components/Customers";
import About from "./components/About";
import Modules from "./components/Modules";
import "./reset.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Info />
      <About />
      <Modules />
      <Customers />
      <Footer />
    </>
  );
}

export default App;
