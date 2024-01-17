import ExperienceCard from "../Components/ExperienceCard";
import adhawk from "../Images/adhawk.png";
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
					image={adhawk}
					text="AdHawk Microsystems | Full Stack Software Developer Intern"
					text2="September 2023 - December 2023"
					date="September 2023 - December 2023"
					body={
						<>
							<li>
								Engineered an automated eye-tracking crash report system with
								Jira integration, improving response time by 60%
							</li>
							<li>
								Streamlined logging infrastructure, reducing the time required
								for log ingestion by 85%
							</li>
							<li>
								Implemented interactive eye-tracking data visualization tools,
								allowing users to gain valuable insights at a glance
							</li>
							<li>
								Integrated session-less data into the analytics platform,
								enabling users to review diverse eye-tracking information
							</li>
							<li>
								Performed extensive unit testing, regression testing, and
								end-to-end testing to resolve 25+ critical bugs
							</li>
							<li>
								Languages/technologies utilized include Python, GraphQL,
								MongoDB, Node.js, Angular, TypeScript, Apollo, Docker, Grafana,
								Loki
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={ford}
					text="Ford Motor Company | Software Engineering Intern"
					text2="January 2023 - April 2023"
					date="January 2023 - April 2023"
					body={
						<>
							<li>
								Developed 20+ web pages for international markets, generating
								the company 1,000,000+ dollars in revenue
							</li>
							<li>
								Built reusable and modular front-end components, optimizing
								developer productivity and code maintainability
							</li>
							<li>
								Applied Test-Driven Development (TDD) to design comprehensive
								unit tests, increasing test coverage by 8%
							</li>
							<li>
								Refactored legacy codebase to optimize performance, enhance code
								readability, and minimize technical debt
							</li>
							<li>
								Conducted 40+ PR reviews for key features, ensuring proper
								functionality and adherence to coding standards
							</li>
							<li>
								Pair programmed with senior engineers, fostering knowledge
								transfer and accelerated development
							</li>
							<li>
								Languages/technologies utilized include React, TypeScript,
								JavaScript, HTML, CSS
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={york}
					text="York Region | Software Developer Intern"
					text2="May 2022 - August 2022"
					date="May 2022 - August 2022"
					body={
						<>
							<li>
								Architected a web application that tracks the motor vehicle
								accidents of more than 1.17 million people
							</li>
							<li>
								Created internal tools to automate database creation,
								duplication, and backup, increasing efficiency by 75%
							</li>
							<li>
								Performed extensive data modelling, use case creation, and
								requirement gathering to fulfill client specifications
							</li>
							<li>
								Executed comprehensive software testing, documentation, and
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
					text="Compass | Full Stack Developer Intern"
					text2="May 2021 - August 2021"
					date="May 2021 - August 2021"
					body={
						<>
							<li>
								Spearheaded full stack development of a B2B SaaS mental health
								platform used by 6000+ university students
							</li>
							<li>
								Constructed REST APIs and the front-end implementation of
								various new features and UI/UX upgrades
							</li>
							<li>
								Implemented the ability to automatically populate the database
								via CSV, improving developer productivity by 70%
							</li>
							<li>
								Established advanced search filters to refine query results,
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
