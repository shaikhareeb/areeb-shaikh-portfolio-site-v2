import ProjectCardGH from "../Components/ProjectCardGitHub";
import ProjectCardNoGH from "../Components/ProjectCardNoGitHub";
import sorting from "../Images/sorting.png";
import portfolio from "../Images/portfolio.png";
import cards from "../Images/cards.png";
import compiler from "../Images/compiler.png";
import android from "../Images/android.png";
import sweetdreams from "../Images/sweetdreams.png";
import privacydroid from "../Images/privacydroid.png";
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
				<ProjectCardGH
					image={sweetdreams}
					text="SweetDreams"
					tech="Kotlin, Firebase, Compose Multiplatform, YouTube API"
					body="
					Developed a desktop application as a convenient, one-stop solution for parents to upload, explore, and play lullabies for
					their children by leveraging Kotlin, Compose Multiplatform, Firebase, and MVVM to create a customized audio platform."
					link="https://github.com/shaikhareeb/SweetDreams"
					theme={theme}
				/>
				<ProjectCardGH
					image={privacydroid}
					text="PrivacyDroid"
					tech="Kotlin, Firebase, Jetpack Compose"
					body="
					Built an Android app to navigate app permissions, marketplaces, and general security within the Android ecosystem using
					Kotlin, Firebase, and Jetpack Compose, enabling users to gain tailored insights into their device permissions and privacy."
					link="https://github.com/shaikhareeb/PrivacyDroid"
					theme={theme}
				/>
				<ProjectCardNoGH
					image={compiler}
					text="Compiler & Assembler"
					tech="C++"
					body="
					Built a fully-functional compiler for a C++ derived language to MIPS assembly and further into machine code. 
					Additionally, developed an assembler to translate generated assembly code from valid programs into executable binaries."
					theme={theme}
				/>
				<ProjectCardNoGH
					image={android}
					text="Android Apps"
					tech="Kotlin"
					body="
					Developed Connect Four, a note-taking app, and a graph visualizer with animations and intuitive user interfaces. 
					Applied Model-View-Controller, Model-View-ViewModel, and Single-Activity Architecture for maintainability, scalability, and streamlined development.
					"
					theme={theme}
				/>
				<ProjectCardNoGH
					image={cards}
					text="Straights (Card Game)"
					tech="C++"
					body="
					Crafted a virtual card game using object-oriented programming principles in C++, seamlessly integrating MVC architecture
					and an observer design pattern through UML modelling to minimize coupling and maximize cohesion effectively."
					theme={theme}
				/>
				<ProjectCardGH
					image={sorting}
					text="Sorting Algorithm Visualizer"
					tech="React, JavaScript, HTML, CSS"
					body="
					Web app that visualizes Heap Sort, Merge Sort, Quick Sort, Selection Sort, Insertion Sort, 
					and Bubble Sort with the ability to randomize and generate new values for the array."
					link="https://github.com/shaikhareeb/sorting-visualizer"
					theme={theme}
				/>
				<ProjectCardGH
					image={portfolio}
					text="Personal Website"
					tech="React, JavaScript, TailwindCSS"
					body="
					This website right here! Developed a fully responsive portfolio website from scratch
					complete with animations and themes to serve as a more comprehensive resume."
					link="https://github.com/shaikhareeb/shaikhareeb.github.io"
					theme={theme}
				/>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Projects;
