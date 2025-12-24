import Benefits from "./components/benefits/Benefits";
import ContactUs from "./components/contact/ContactUs";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import OurClasses from "./components/ourClasses/OurClasses";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="app text-gray-500 bg-gray-50">
        <NavBar />
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
