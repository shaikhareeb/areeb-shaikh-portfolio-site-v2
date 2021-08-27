import React from "react";
import test from "../Images/test.jpg";

const FeaturedCard = ({ image, text }) => {
	return (
		<div className="w-full my-4 mr-5">
			<div
				style={{
					backgroundImage: `url(${image})`,
				}}
				className="relative w-full h-96 rounded-md"
			>
				<div className="flex justify-center items-center duration-300 absolute w-full h-full opacity-0 bg-black hover:opacity-50">
					<p className="font-mono text-3xl text-white">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
