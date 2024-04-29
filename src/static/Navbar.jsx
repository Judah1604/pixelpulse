import "./styles/static.css";

function Navbar() {
	return (
		<div className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<div className="nav-item">
					<a href="#" className="nav-link">
						Features
					</a>
				</div>
				<div className="ball"></div>
				<div className="nav-item">
					<a href="#" className="nav-link">
						Pricing
					</a>
				</div>
				<a href="/">
					<img src="/logo.png" alt="PixelPulse" className="logo" />
				</a>
				<div className="nav-item">
					<a href="#" className="nav-link">
						FAQ
					</a>
				</div>
				<div className="ball"></div>
				<div className="nav-item">
					<a href="#" className="nav-link">
						Download
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
