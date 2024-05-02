import "./Styles/common.css";
import Feautures from "./components/Features/Feautures";
import HeroSection from "./components/HeroSection/HeroSection";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./static/Footer";
import Navbar from "./static/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
            <Feautures />
            <Testimonials />
            <Footer />
		</>
	);
}

export default App;
