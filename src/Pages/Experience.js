import ExperienceCard from "../Components/ExperienceCard";
import york from "../Images/york_experience.png";
import compass from "../Images/compass.png";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const Experience = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 0.7 }}
		>
			<h1 className="font-mono text-2xl mt-8 mb-4">Experience</h1>
			<div className="grid grid-cols-1 gap-y-6">
				<ExperienceCard
					image={york}
					text="Software Developer @ York Region"
					text2="May 2022 - August 2022"
					date="May 2022 - August 2022 | Greater Toronto Area, ON"
					body={
						<>
							<li>
								Developed a web application that tracks the motor vehicle
								accidents of more than 1.17 million people
							</li>
							<li>
								Performed extensive data modelling, use case creation, and
								requirement gathering to meet user needs
							</li>
							<li>
								Created scripts to automate database creation, duplication, and
								backup, improving efficiency by 80%
							</li>
							<li>
								Engaged in extensive software testing, documentation, go-live,
								and deployment activities for various departmental applications,
								resulting in a smooth user experience
							</li>
							<li>
								Technologies utilized include SQL, JavaScript, Oracle Database,
								and Oracle APEX
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={compass}
					text="Full Stack Developer @ Compass"
					text2="May 2021 - August 2021"
					date="May 2021 - August 2021 | Greater Toronto Area, ON"
					body={
						<>
							<li>
								Spearheaded full stack development of a B2B SaaS platform used
								by thousands of students at multiple Canadian universities
							</li>
							<li>
								Developed REST APIs and the front-end implementation of various
								new features and UI/UX updates
							</li>
							<li>
								Implemented the functionality to automatically populate the
								database via CSV, significantly improving efficiency by
								eliminating countless hours of tedious manual labor
							</li>
							<li>
								Technologies utilized include React, Django, PostgreSQL,
								JavaScript, and HTML/CSS
							</li>
						</>
					}
					theme={theme}
				/>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Experience;
