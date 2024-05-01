import "./Styles/common.css";
import Feautures from "./components/Features/Feautures";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./static/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
            <Feautures />
		</>
	);
}

export default App;
