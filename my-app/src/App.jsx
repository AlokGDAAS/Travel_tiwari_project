import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Destination from "./components/sub_pages/Destinations_sub_pages/Destination";
import Destination_details from "./components/sub_pages/Destinations_sub_pages/Destination_details";
import Book_now from "./components/bookings/Book_now";
import Tour_list from "./components/sub_pages/Tours_sub_pages.jsx/Tour_list";
import Tour_details from "./components/sub_pages/Tours_sub_pages.jsx/Tour_details";


function App() {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/destination" element={<Destination />}/>
            <Route path="/destination-details" element={<Destination_details />}/>
            <Route path="/book-now" element={<Book_now />}/>
            <Route path="/tour-list" element={<Tour_list />}/>
            <Route path="/tour-details" element={<Tour_details />}/>            
          </Routes>          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
