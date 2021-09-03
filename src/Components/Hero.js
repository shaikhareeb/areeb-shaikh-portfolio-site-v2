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
			<h1 className="text-6xl mt-48">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.typeString("Hey there, I'm Areeb").start();
					}}
					options={{
						delay: 100,
					}}
				/>
			</h1>
			<h2 className="font-inconsolata text-4xl mt-4">
				a computer science student at the University of Waterloo and former
				full-stack developer intern at Compass
			</h2>
			<div className="mt-6 flex">
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
			</div>
		</div>
	);
};

export default Hero;
