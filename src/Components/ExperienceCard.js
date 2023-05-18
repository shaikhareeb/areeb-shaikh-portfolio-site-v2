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
					className="cursor-pointer rounded-md hidden flex-col justify-center items-center duration-300 
							absolute w-full h-full bg-opacity-0 bg-black text-transparent hover:text-white hover:bg-opacity-50 
							md:flex"
				>
					<p className="text-2xl font-mono">{text}</p>
					<p className="text-xl font-['karla']">{text2}</p>
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
