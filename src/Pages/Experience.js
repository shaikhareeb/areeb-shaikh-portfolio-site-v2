import Card from "../Components/Card";
import test from "../Images/test2.jpg";

const Experience = ({ theme }) => {
	return (
		<div>
			<h1 className="font-mono text-2xl mt-8">Experience</h1>
			<Card image={test} text="Sorting Visualizer" theme={theme} />
			<Card image={test} text="Sorting Visualizer" theme={theme} />
		</div>
	);
};

export default Experience;
