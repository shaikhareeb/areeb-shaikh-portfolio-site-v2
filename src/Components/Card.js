import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ image, text, theme }) => {
	const [toggle, setToggle] = useState(false);

	const toggleModal = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="w-full my-4 mr-5">
			<div
				style={{
					backgroundImage: `url(${image})`,
				}}
				className="relative w-full h-96"
				onClick={toggleModal}
			>
				<div className="flex justify-center items-center duration-300 absolute w-full h-full text-zero bg-opacity-0 bg-black text-opacity-0 hover:bg-opacity-50 hover:text-2xl">
					<p className="font-mono text-white">{text}</p>
				</div>
				<Modal toggle={toggle} setToggle={setToggle} theme={theme} />
			</div>
		</div>
	);
};

export default Card;
