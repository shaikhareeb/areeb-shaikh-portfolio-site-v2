import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineFileText,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Hero = () => {
	return (
		<div className="font-mono">
			<h1 className="text-6xl mt-48">Hey there, I'm Areeb</h1>
			<h2 className="font-inconsolata text-4xl mt-6">
				a computer science student at the University of Waterloo
			</h2>
			<div className="mt-6 flex">
				<div className="hover:text-blue-800">
					<AiFillGithub className="mr-8" size={40} />
				</div>
				<AiFillLinkedin className="mr-8" size={40} />
				<FiMail className="mr-8" size={40} />
				<AiOutlineFileText size={38} />
			</div>
		</div>
	);
};

export default Hero;
