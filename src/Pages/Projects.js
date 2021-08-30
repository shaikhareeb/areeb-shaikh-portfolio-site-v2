import Card from "../Components/Card";
import test from "../Images/test2.jpg";

const Projects = ({ theme }) => {
	return (
		<div>
			<div>
				<h1 className="font-mono text-2xl mt-8">Projects</h1>
				<div className="grid grid-cols-2 gap-8">
					<Card image={test} text="Sorting Visualizer" theme={theme} />
					<Card image={test} text="Sorting Visualizer" theme={theme} />
				</div>
			</div>
		</div>
	);
};

export default Projects;
