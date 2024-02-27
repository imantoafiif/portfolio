import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Stacks from "./components/stacks/Stacks"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/stacks" element={<Stacks />} />
                </Routes>
            </div>
            <Footer/>
        </Router>
    )
}

export default App