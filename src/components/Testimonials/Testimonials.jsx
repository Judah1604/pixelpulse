import './styles/styles.css'

function Testimonials() {
  return (
		<div className="testimonials container-fluid text-center">
			<h4 className="lil-bold">WALL OF LOVE</h4>
			<h1>Words from our fans</h1>
			<div className="row mt-4">
				<div className="testimonial col-md-4">
					<p>
						PixelPulse's customer support is second to none! They're
						like my tech superheroes, always there when I need them.
					</p>
					<div className="person mt-4">
						<img src="/woman.jpg" alt="Woman" />
						<div className="name">
							<h3>Jessica Saunders</h3>
							<p>CYBERLEAP</p>
						</div>
					</div>
				</div>
				<div className="testimonial col-md-4 span">
					<p>
						The analytics feature is like having a personal fortune
						teller. It's been instrumental in guiding our business
						decisions.
					</p>
					<div className="person mt-4">
						<img src="/woman.jpg" alt="Woman" />
						<div className="name">
							<h3>Alicia Barker</h3>
							<p>CYBERLEAP</p>
						</div>
					</div>
				</div>
				<div className="testimonial col-md-4">
					<p>
						I was skeptical at first, but now I can't imagine our
						content operations without it. It's that impactful.
					</p>
					<div className="person mt-4">
						<img src="/woman.jpg" alt="Woman" />
						<div className="name">
							<h3>Jessica Saunders</h3>
							<p>CYBERLEAP</p>
						</div>
					</div>
				</div>
				<div className="testimonial col-md-4">
					<p>
						Adopting this software was a breeze. It's made everyday
						tasks so much simpler.
					</p>
					<div className="person mt-4">
						<img src="/woman.jpg" alt="Woman" />
						<div className="name">
							<h3>Melanie Hurst</h3>
							<p>CYBERLEAP</p>
						</div>
					</div>
				</div>
				<div className="testimonial col-md-4">
					<p>
						The efficiency boost is undeniable. This platform has
						transformed our workflow, forever.
					</p>
					<div className="person mt-4">
						<img src="/woman.jpg" alt="Woman" />
						<div className="name">
							<h3>Jim Bradley</h3>
							<p>VID CAPITAL INTE</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Testimonials