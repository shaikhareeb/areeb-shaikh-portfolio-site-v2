import ExperienceCard from "../Components/ExperienceCard";
import ford from "../Images/ford.png";
import york from "../Images/york.png";
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
					image={ford}
					text="Software Engineering Intern"
					text2="January 2023 - April 2023"
					date="January 2023 - April 2023"
					body={
						<>
							<li>
								Engineered production-quality code in an Agile environment to
								develop 20+ web pages for international markets
							</li>
							<li>
								Developed reusable and modular front-end components, increasing
								developer productivity and code maintainability
							</li>
							<li>
								Implemented test-driven development to design comprehensive unit
								tests, reducing bug reports by ~60%
							</li>
							<li>
								Refactored legacy codebase to enhance code readability, optimize
								performance, and minimize technical debt
							</li>
							<li>
								Facilitated seamless stage and production deployments by
								leveraging CI/CD pipelines and automation tools
							</li>
							<li>
								Conducted 50+ PR reviews, ensuring functionality, adherence to
								coding standards, and bug identification
							</li>
							<li>
								Pair programmed with senior engineers, fostering knowledge
								transfer and accelerated development
							</li>
							<li>
								Languages/technologies utilized include React, TypeScript,
								JavaScript, Jest, HTML, CSS
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={york}
					text="Software Developer Intern"
					text2="May 2022 - August 2022"
					date="May 2022 - August 2022"
					body={
						<>
							<li>
								Developed a web application that tracks the motor vehicle
								accidents of more than 1.17 million people
							</li>
							<li>
								Created scripts to automate database creation, duplication, and
								backup, increasing efficiency by ~80%
							</li>
							<li>
								Performed extensive data modelling, use case creation, and
								requirement gathering to meet business and user needs
							</li>
							<li>
								Engaged in comprehensive software testing, documentation, and
								deployment activities for various applications
							</li>
							<li>
								Languages/technologies utilized include JavaScript, SQL, Oracle
								Database, HTML, CSS
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={compass}
					text="Full Stack Developer Intern"
					text2="May 2021 - August 2021"
					date="May 2021 - August 2021"
					body={
						<>
							<li>
								Spearheaded full stack development of a B2B SaaS mental health
								platform used by 5000+ university students
							</li>
							<li>
								Engineered REST APIs and the front-end implementation of various
								new features and UI/UX upgrades
							</li>
							<li>
								Implemented automatic population of the database via CSV,
								improving developer productivity by ~70%
							</li>
							<li>
								Developed advanced search filters to refine query results,
								enhancing user experience and search accuracy
							</li>
							<li>
								Languages/technologies utilized include React, Django, Python,
								JavaScript, PostgreSQL, HTML, CSS
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
