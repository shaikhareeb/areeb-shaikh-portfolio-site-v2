import Card from "./Card";
import test from "../Images/test.jpg";
import test2 from "../Images/test2.jpg";

const Featured = ({ theme }) => {
	return (
		<div className="md:mt-32 mt-12">
			<h1 className="font-mono md:text-3xl text-2xl mb-4">Featured</h1>
			<div className="grid grid-cols-1 gap-y-4">
				<Card image={test} text="Sorting Visualizer" theme={theme} />
				<Card image={test2} text="Sorting Visualizer" theme={theme} />
			</div>
		</div>
	);
};

export default Featured;
