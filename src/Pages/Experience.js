import ExperienceCard from "../Components/ExperienceCard";
import compass from "../Images/compass.png";
import { motion } from "framer-motion";

const Experience = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 0.7 }}
		>
			<h1 className="font-mono text-2xl mt-8 mb-4">Experience</h1>
			<div className="grid grid-cols-1 gap-y-4">
				<ExperienceCard
					image={compass}
					text="Full-Stack Developer Intern @ Compass"
					text2="May 2021 - August 2021"
					theme={theme}
				/>
			</div>
		</motion.div>
	);
};

export default Experience;
