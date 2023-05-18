import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const ModalGitHub = ({
	toggle,
	setToggle,
	theme,
	image,
	header,
	tech,
	body,
	link,
}) => {
	return (
		<>
			{toggle ? (
				<div
					className="top-0 left-0 right-0 bottom-0 z-20 w-full h-full fixed bg-black 
							bg-opacity-50 flex justify-center items-center"
				>
					<motion.div
						style={
							theme === "light"
								? { backgroundColor: "white" }
								: { backgroundColor: "#181818" }
						}
						className="rounded-md max-w-screen-xl fixed w-3/4 md:h-5/6 h-3/5 shadow-md z-10 overflow-auto"
						initial={{ y: "10vh" }}
						animate={{ y: 0 }}
						transition={{ type: "tween", duration: 0.7 }}
						onClick={() => setToggle((prev) => !prev)}
					>
						<div
							style={{
								backgroundImage: `url(${image})`,
							}}
							className="bg-no-repeat bg-contain bg-center w-full md:h-4/6 h-1/2 bg-gray-200"
						/>
						<div
							className="top-2 right-2 absolute text-white cursor-pointer"
							onClick={() => setToggle((prev) => !prev)}
						>
							<MdClose color="black" size={25} />
						</div>
						<div className="mt-4 ml-4 md:text-2xl text-xl">
							<p className="font-mono">{header}</p>
							<p className="md:text-lg text-base italic font-['karla']">
								{tech}
							</p>
							<p className="md:text-lg text-base mt-2 mb-4 font-['karla']">
								{body}
							</p>
							<AiFillGithub
								className="cursor-pointer md:text-5xl text-3xl absolute top-3 left-3 text-black hover:text-blue-300"
								onClick={() => window.open(link, "_blank")}
							/>
						</div>
					</motion.div>
				</div>
			) : null}
		</>
	);
};

export default ModalGitHub;
