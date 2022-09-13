import React from "react";
import Hero from "../Components/Hero";
import HomeCard from "../Components/HomeCard";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import experience from "../Images/york_home.png";
import projects from "../Images/home2.png";
import photography from "../Images/home3.png";
import about from "../Images/home4.png";

const Home = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 1 }}
		>
			<Hero />
			<div className="md:mt-20 mt-12 grid grid-cols-1 md:gap-y-5 gap-y-4">
				<HomeCard image={experience} route="/experience" />
				<HomeCard image={projects} route="/projects" />
				<HomeCard image={photography} route="/photography" />
				<HomeCard image={about} route="/about" />
			</div>
			<Footer />
		</motion.div>
	);
};

export default Home;
