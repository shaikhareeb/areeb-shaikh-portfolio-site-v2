import Card from "./Card";
import test from "../Images/test.jpg";
import test2 from "../Images/test2.jpg";

const Featured = ({ theme }) => {
	return (
		<div className="mt-32">
			<h1 className="font-mono text-3xl mb-4">Featured </h1>
			<div className="grid grid-cols-1 gap-y-4">
				<Card image={test} text="Sorting Visualizer" theme={theme} />
				<Card image={test2} text="Sorting Visualizer" theme={theme} />
			</div>
		</div>
	);
};

export default Featured;
