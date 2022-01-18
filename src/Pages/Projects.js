import ProjectCardGH from "../Components/ProjectCardGitHub";
import ProjectCardNoGH from "../Components/ProjectCardNoGitHub";
import sorting from "../Images/sorting.png";
import portfolio from "../Images/portfolio.png";
import cards from "../Images/cards.png";
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
				<ProjectCardGH
					image={sorting}
					text="Sorting Visualizer"
					theme={theme}
				/>
				<ProjectCardNoGH
					image={cards}
					text="Straights Card Game"
					theme={theme}
				/>
				<ProjectCardGH
					image={portfolio}
					text="Personal Website"
					theme={theme}
				/>
			</div>
		</motion.div>
	);
};

export default Projects;
