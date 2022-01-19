import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineFileText,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="font-mono">
			<h1 className="md:text-6xl text-2xl md:mt-36 mt-12">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.typeString("Hey there, I'm Areeb").start();
					}}
					options={{
						delay: 90,
					}}
				/>
			</h1>
			<h2 className="font-inconsolata md:text-4xl text-xl md:mt-8 mt-4 mb-4">
				a Computer Science student at uWaterloo and an aspiring Software
				Engineer
			</h2>
			<h2 className="font-inconsolata md:text-2xl text-sm mb-8">
				Seeking Summer 2022 Internships | Previously{" "}
				<a
					href="https://checkcompass.ca/"
					target="_blank"
					rel="noopener noreferrer"
					className="font-bold"
				>
					@ Compass
				</a>{" "}
			</h2>
			<motion.div
				className="mt-6 flex"
				initial={{ y: "2vw", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", delay: 0.6, duration: 0.8 }}
			>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiFillGithub
						className="md:mr-8 mr-5 cursor-pointer md:text-5xl text-3xl"
						onClick={() =>
							window.open("https://github.com/shaikhareeb", "_blank")
						}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiFillLinkedin
						className="md:mr-8 mr-5 cursor-pointer md:text-5xl text-3xl"
						onClick={() =>
							window.open("https://www.linkedin.com/in/areeb-shaikh/", "_blank")
						}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<FiMail
						className="md:mr-8 mr-5 cursor-pointer md:text-5xl text-3xl"
						onClick={() => window.open("mailto:a59shaik@uwaterloo.ca")}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiOutlineFileText
						className="cursor-pointer md:text-5xl text-3xl"
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/1G0GMJAIvYxOSWiBm-Vp_QkSGC8tFHq5A/view?usp=sharing",
								"_blank"
							)
						}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
