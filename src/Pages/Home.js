import React from "react";
import Hero from "../Components/Hero";
import Content from "../Components/Content";

const Home = ({ theme }) => {
	return (
		<div>
			<Hero />
			<Content theme={theme} />
		</div>
	);
};

export default Home;
