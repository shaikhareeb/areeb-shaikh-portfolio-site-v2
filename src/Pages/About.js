import test from "../Images/test.jpg";

const About = () => {
	return (
		<div>
			<h1 className="font-mono text-3xl mt-12">About Me</h1>
			<div className="flex mt-4">
				<p className="font-inconsolata text-md mr-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
					odio nec nisl convallis pulvinar non ac metus. Donec quis rhoncus
					tortor, id congue est. Vestibulum commodo ante ac pulvinar sodales.
					Maecenas turpis velit, rhoncus vitae nibh nec, lacinia egestas mauris.
					Ut at lorem a diam fringilla dapibus id at nunc. Maecenas neque ipsum,
					ornare a lectus ac, aliquam volutpat sem. Nullam quis commodo orci, et
					faucibus turpis. Etiam a magna sapien. Integer nulla tellus, tempus eu
					eleifend in, ornare vitae lectus.
				</p>
				<img className="rounded-md w-1/2" src={test} alt="Me" />
			</div>
		</div>
	);
};

export default About;
