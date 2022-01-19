import React, { useState } from "react";
import Modal from "./ExperienceModal";

const Card = ({ image, text, text2, theme, date, body }) => {
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
				<div
					className="cursor-pointer rounded-md flex flex-col justify-center items-center duration-300 absolute w-full h-full 
							   text-zero bg-opacity-0 bg-black text-opacity-0 hover:bg-opacity-50 md:hover:text-2xl hover:text-lg"
				>
					<p className="font-mono text-white">{text}</p>
					<p className="md:hover:text-xl hover:text-base font-inconsolata text-white">
						{text2}
					</p>
				</div>
				<Modal
					image={image}
					toggle={toggle}
					setToggle={setToggle}
					header={text}
					date={date}
					theme={theme}
					body={body}
				/>
			</div>
		</div>
	);
};

export default Card;
