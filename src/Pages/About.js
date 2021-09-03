import test from "../Images/test.jpg";
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
			<h1 className="font-mono text-3xl mt-32">About Me</h1>
			<div className="flex mt-4">
				<div>
					<p className="font-inconsolata text-md mr-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						eu odio nec nisl convallis pulvinar non ac metus. Donec quis rhoncus
						tortor, id congue est. Vestibulum commodo ante ac pulvinar sodales.
						Maecenas turpis velit, rhoncus vitae nibh nec, lacinia egestas
						mauris. Ut at lorem a diam fringilla dapibus id at nunc. Maecenas
						neque ipsum, ornare a lectus ac, aliquam volutpat sem. Nullam quis
						commodo orci, et faucibus turpis. Etiam a magna sapien. Integer
						nulla tellus, tempus eu eleifend in, ornare vitae lectus.
					</p>
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
									window.open(
										"https://www.linkedin.com/in/areeb-shaikh/",
										"_blank"
									)
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
				<img className="rounded-md w-1/2" src={test} alt="Me" />
			</div>
		</motion.div>
	);
};

export default About;
