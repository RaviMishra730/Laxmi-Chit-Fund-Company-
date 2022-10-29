import { BrowserRouter as  Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from  "./components/Footer.jsx";
import Contact from  "./components/Contact.jsx";
import Services from  "./components/Services.jsx";

import "./style/App.scss";
import "./style/header.scss";
import "./style/Home.scss";
import "./style/footer.scss";
import "./style/Contact.scss";
  
function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Services" element={<Services/>} />
    </Routes>
    <Footer/>
  </Router>
}
export default App;