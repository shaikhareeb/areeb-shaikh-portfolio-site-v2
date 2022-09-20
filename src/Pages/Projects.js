import ProjectCardGH from "../Components/ProjectCardGitHub";
import ProjectCardNoGH from "../Components/ProjectCardNoGitHub";
import sorting from "../Images/sorting.png";
import portfolio from "../Images/portfolio.png";
import cards from "../Images/cards.png";
import compiler from "../Images/compiler.png";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const Projects = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 0.7 }}
		>
			<h1 className="font-mono text-2xl mt-8 mb-4">Projects</h1>
			<div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
				<ProjectCardNoGH
					image={compiler}
					text="Compiler"
					tech="C++"
					body="Created as part of CS241: Foundations of Sequential Programs. Built a compiler for a C++ derived language into assembly and further into machine code. 
					Implemented a scanner, parser, semantic analyzer, code generator, and assembler. Additionally, utilized dynamic memory management, symbol tables, and linkers.
					The source code is not available online due to copyright."
					theme={theme}
				/>
				<ProjectCardGH
					image={sorting}
					text="Sorting Visualizer"
					tech="React, JavaScript, HTML/CSS"
					body="Web app that visualizes Heap Sort, Merge Sort, Quick Sort, Selection Sort, Insertion Sort, 
					and Bubble Sort with the ability to randomize and generate new values for the array."
					link="https://github.com/shaikhareeb/sorting-visualizer"
					theme={theme}
				/>
				<ProjectCardNoGH
					image={cards}
					text="Straights (Card Game)"
					tech="C++"
					body="Created as part of CS246: Object-Oriented Software Development.
						Straights is a four-player command line card game created using object-oriented programming 
						and includes functional playability for both human and computer players.
						Utilizes Model-View-Controller (MVC) and Observer design patterns. 
						The source code is not available online due to copyright."
					theme={theme}
				/>
				<ProjectCardGH
					image={portfolio}
					text="Personal Website"
					tech="React, JavaScript, TailwindCSS"
					body="This website right here! Developed a fully responsive portfolio website from scratch
					 complete with animations and themes to serve as a more comprehensive resume."
					link="https://github.com/shaikhareeb/areebshaikh.me"
					theme={theme}
				/>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Projects;
