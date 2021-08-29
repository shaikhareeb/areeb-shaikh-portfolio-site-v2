import React, { useState } from "react";
import Modal from "./Modal";

const FeaturedCard = ({ image, text }) => {
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
				className="relative w-full h-96 rounded-md"
				onClick={toggleModal}
			>
				<div className="flex justify-center items-center duration-300 absolute w-full h-full opacity-0 bg-black rounded-md hover:opacity-50">
					<p className="opacity-100 font-mono text-3xl text-white">{text}</p>
				</div>
				<Modal toggle={toggle} setToggle={setToggle} />
			</div>
		</div>
	);
};

export default FeaturedCard;
