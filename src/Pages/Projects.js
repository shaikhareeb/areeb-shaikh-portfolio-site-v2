import Card from "../Components/Card";
import test from "../Images/test2.jpg";
import { motion } from "framer-motion";

const Projects = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 0.7 }}
		>
			<h1 className="font-mono text-2xl mt-8 mb-4">Projects</h1>
			<div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
				<Card image={test} text="Sorting Visualizer" theme={theme} />
				<Card image={test} text="Sorting Visualizer" theme={theme} />
			</div>
		</motion.div>
	);
};

export default Projects;
