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
					text="AdHawk Microsystems — Software Developer Intern"
					text2="September 2023 - December 2023"
					date="September 2023 - December 2023"
					body={
						<>
							<li>
								Architected an automated crash report system with Jira
								integration for 350+ eye-tracking glasses with Python, Apollo
								GraphQL, MongoDB, Node.js, and Docker, improving customer
								response time by 40% and crash report efficiency by 80%
							</li>
							<li>
								Integrated real-time gaze-tracking metrics into the analytics
								platform, expanding data coverage by 50% and empowering users to
								access a comprehensive and diverse range of ocular insights
								using Python, Apollo GraphQL, and MongoDB
							</li>
							<li>
								Implemented interactive eye-tracking data visualization tools in
								Angular and TypeScript, reducing data analysis time by 60%
							</li>
							<li>
								Streamlined logging infrastructure with Python and Grafana Loki,
								decreasing the time required for log ingestion by 85%
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={ford}
					text="Ford Motor Company — Software Engineering Intern"
					text2="January 2023 - April 2023"
					date="January 2023 - April 2023"
					body={
						<>
							<li>
								Developed 16 dynamic marketing web pages tailored to 5 diverse
								international markets using React and TypeScript, driving
								revenue growth exceeding $100,000 by expanding the clientele of
								various products, services, and software solutions
							</li>
							<li>
								Built 10 scalable and modular UI components in React and
								TypeScript, optimizing code maintainability and developer
								productivity for a 12-person engineering team by saving 30+
								hours of development for new web pages and features
							</li>
							<li>
								Refactored a 3000+ lines JavaScript codebase to TypeScript,
								improving code readability and reducing bug incidents by 40%
							</li>
							<li>
								Applied test-driven development (TDD) to design 40+
								comprehensive unit tests with Jest, increasing test coverage by
								12%
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={york}
					text="York Region — Software Developer Intern"
					text2="May 2022 - August 2022"
					date="May 2022 - August 2022"
					body={
						<>
							<li>
								Engineered a robust web application that tracks the accidents of
								8,000+ motor vehicles using JavaScript and Oracle APEX
							</li>
							<li>
								Created internal tools automating Oracle Database creation,
								duplication, and backup in SQL, increasing efficiency by 75%
							</li>
							<li>
								Optimized database queries and indexing strategies, leading to a
								30% reduction in organizational application response time
							</li>
							<li>
								Executed comprehensive software testing, data modelling, and
								deployment activities with 3 cross-functional teams
							</li>
						</>
					}
					theme={theme}
				/>
				<ExperienceCard
					image={compass}
					text="Compass — Software Engineer Intern"
					text2="May 2021 - August 2021"
					date="May 2021 - August 2021"
					body={
						<>
							<li>
								Led the full stack development of a B2B SaaS mental health
								platform serving 6,000+ university students by architecting REST
								APIs in Django and enhancing UI/UX features in React and
								JavaScript, resulting in app adoption by 3 new universities
							</li>
							<li>
								Automated PostgreSQL database population with CSV files using
								Python, boosting developer productivity by 75%
							</li>
							<li>
								Established advanced search filters using Django and React to
								refine search query results, reducing wait times by 80%
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
