import me from "../Images/me.jpg";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineFileText,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 0.7 }}
		>
			<h1 className="font-mono text-2xl mt-8 mb-8">About Me</h1>
			<div className="flex md:relative flex-col justify-center md:items-start items-center">
				<div className="md:w-4/6">
					<p className="md:mb-8 mb-6">
						👋 Hey! I'm Areeb, pleasure to meet you. Here's a little about me:
					</p>
					<div className="mb-4">
						<button className="cursor-text bg-gray-200 px-2 mr-2 rounded-sm text-black">
							Location
						</button>
						<span> Greater Toronto Area, Ontario</span>
					</div>
					<div className="mb-4">
						<button className="cursor-text bg-indigo-200 px-2 mr-2 rounded-sm text-black">
							Education
						</button>
						<span> 3A Computer Science, University of Waterloo</span>
					</div>
					<div className="mb-4">
						<button className="cursor-text bg-blue-200 px-2 mr-2 rounded-sm text-black">
							Languages
						</button>
						<span>C/C++, JavaScript, Python, SQL, HTML/CSS, Racket</span>
					</div>
					<div className="mb-4">
						<button className="cursor-text bg-yellow-200 px-2 mr-2 rounded-sm text-black">
							Technologies
						</button>
						<span>
							React, Django, PostgreSQL, TailwindCSS, Git, Oracle Database,
							Oracle APEX, Bootstrap, Framer Motion
						</span>
					</div>
					<div className="md:mb-6 mb-4">
						<button className="cursor-text bg-red-200 px-2 mr-2 rounded-sm text-black">
							Interests
						</button>
						<span>
							{" "}
							Photography, Basketball, Athletics, Travel, Hip-Hop/R&B, Sneakers,
							Sitcoms
						</span>
					</div>
					<p className="mb-2">
						I am a programming enthusiast and avid learner, motivated by my
						desire to take on challenges and innovate impactful solutions.
					</p>
					<p className="md:mb-0 mb-8">
						If you'd like to chat, feel free to reach out to me via email or
						LinkedIn!
					</p>
				</div>
				<img
					className="rounded-md md:h-96 md:w-auto w-1/2 md:absolute md:right-0 md:mb-0 mb-2"
					src={me}
					alt="Me"
				/>
			</div>
			<div className="mt-6 flex md:justify-start justify-center">
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiFillGithub
						className="md:mr-8 mr-6 cursor-pointer"
						size={40}
						onClick={() =>
							window.open("https://github.com/shaikhareeb", "_blank")
						}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiFillLinkedin
						className="md:mr-8 mr-6 cursor-pointer"
						size={40}
						onClick={() =>
							window.open("https://www.linkedin.com/in/areeb-shaikh/", "_blank")
						}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<FiMail
						className="md:mr-8 mr-6 cursor-pointer"
						size={40}
						onClick={() => window.open("mailto:a59shaik@uwaterloo.ca")}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiOutlineFileText
						className="cursor-pointer"
						size={38}
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/12jbhXRFCqzJENK9hWbNWkvvsXIKmjvRf/view?usp=sharing",
								"_blank"
							)
						}
					/>
				</motion.div>
			</div>
			<footer className="h-16">
				<h1 className="pt-6 font-mono md:text-left text-center md:text-sm text-xs">
					Designed & Developed by Areeb Shaikh © 2022
				</h1>
			</footer>
		</motion.div>
	);
};

export default About;
