import { useState } from "react";
import ModalGitHub from "./ModalGitHub";

const ProjectCardGitHub = ({ image, text, theme, tech, body, link }) => {
	const [toggle, setToggle] = useState(false);

	const toggleModal = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="w-full">
			<div
				style={{
					backgroundImage: `url(${image})`,
				}}
				className="bg-no-repeat bg-contain bg-center rounded-md relative w-full md:h-96 h-48 bg-gray-200"
				onClick={toggleModal}
			>
				<div className="cursor-pointer rounded-md flex justify-center items-center duration-300 absolute w-full h-full text-zero bg-opacity-0 bg-black text-opacity-0 hover:bg-opacity-50 hover:text-2xl">
					<p className="font-mono text-white">{text}</p>
				</div>
				<ModalGitHub
					image={image}
					toggle={toggle}
					setToggle={setToggle}
					theme={theme}
					header={text}
					tech={tech}
					body={body}
					link={link}
				/>
			</div>
		</div>
	);
};

export default ProjectCardGitHub;
