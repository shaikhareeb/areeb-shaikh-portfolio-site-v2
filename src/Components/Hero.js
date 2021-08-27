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
				<AiFillGithub
					className="mr-8"
					size={40}
					onClick={() =>
						window.open("https://github.com/shaikhareeb", "_blank")
					}
				/>
				<AiFillLinkedin
					className="mr-8"
					size={40}
					onClick={() =>
						window.open("https://www.linkedin.com/in/areeb-shaikh/", "_blank")
					}
				/>
				<FiMail
					className="mr-8"
					size={40}
					onClick={() => window.open("mailto:a59shaik@uwaterloo.ca")}
				/>
				<AiOutlineFileText
					size={38}
					onClick={() =>
						window.open(
							"https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing",
							"_blank"
						)
					}
				/>
			</div>
		</div>
	);
};

export default Hero;
