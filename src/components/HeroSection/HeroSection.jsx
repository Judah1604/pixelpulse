import './styles/styles.css'

function HeroSection() {
  return (
		<div className="hero container-fluid row">
			<div className="text col-md-4">
				<h4 className='lil-bold'>3D Modeling</h4>
				<h1>Amazingly Simple</h1>
				<p>
					We designed PixelPulse to be an easy to use, quick to learn
					and surprisingly powerful.
				</p>
				<a href="#" className="btn btn-blue">
					<i class="fa-solid fa-bolt"></i>
					TRY IT NOW
				</a>
			</div>
			<img
				src="/hero.png"
				alt="The world, low poly"
				className="col-md-8"
			/>
		</div>
  );
}

export default HeroSection