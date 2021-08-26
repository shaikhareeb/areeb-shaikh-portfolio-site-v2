import React from "react";
import test from "../Images/test.jpg";

const FeaturedCard = () => {
	return (
		<div className="my-4 mr-5">
			<img className="w-full rounded-md" src={test} alt="Featured" />
		</div>
	);
};

export default FeaturedCard;
