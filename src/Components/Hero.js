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
			<h1 className="text-6xl mt-36">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.typeString("Hey there, I'm Areeb").start();
					}}
					options={{
						delay: 90,
					}}
				/>
			</h1>
			<h2 className="font-inconsolata text-4xl mt-8 mb-8">
				a computer science student at uWaterloo and former full-stack developer
				intern at{" "}
				<a
					href="https://checkcompass.ca/"
					target="_blank"
					rel="noopener noreferrer"
					className="font-bold"
				>
					Compass
				</a>{" "}
			</h2>
			<h2 className="font-inconsolata text-2xl mt-8 mb-8">
				check out my featured work below and use the navbar to learn more about
				me
			</h2>
			<motion.div
				className="mt-6 flex"
				initial={{ y: "2vw", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", delay: 0.6, duration: 0.8 }}
			>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiFillGithub
						className="mr-8 cursor-pointer"
						size={40}
						onClick={() =>
							window.open("https://github.com/shaikhareeb", "_blank")
						}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<AiFillLinkedin
						className="mr-8 cursor-pointer"
						size={40}
						onClick={() =>
							window.open("https://www.linkedin.com/in/areeb-shaikh/", "_blank")
						}
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.1 }}>
					<FiMail
						className="mr-8 cursor-pointer"
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
								"https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing",
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
