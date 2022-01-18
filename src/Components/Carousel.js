import React, { useState } from "react";
import { motion } from "framer-motion";
import CarouselData from "./CarouselData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const len = slides.length;

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<>
			<div className="relative h-screen flex items-center justify-center">
				<motion.div
					className="absolute left-0 cursor-pointer select-none"
					whileHover={{ scale: 1.2 }}
					initial={{ x: "-10vw", scale: 0.9, opacity: 0 }}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{ type: "tween", duration: 0.5 }}
					onClick={() => {
						setCurrent(current === 0 ? len - 1 : current - 1);
					}}
				>
					<AiOutlineArrowLeft size={35} />
				</motion.div>
				<motion.div
					className="absolute right-0 cursor-pointer select-none"
					whileHover={{ scale: 1.2 }}
					initial={{ x: "10vw", scale: 0.9, opacity: 0 }}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{ type: "tween", duration: 0.5 }}
					onClick={() => {
						setCurrent(current === len - 1 ? 0 : current + 1);
					}}
				>
					<AiOutlineArrowRight size={35} />
				</motion.div>
				{CarouselData.map((slide, index) => {
					return (
						<div className="md:h-1/2 flex justify-center" key={index}>
							<div className="h-full md:w-full w-3/4">
								{index === current && (
									<motion.img
										src={slide.image}
										alt="photograph"
										className="h-full object-contain rounded-md"
										initial={{ scale: 0.9, opacity: 1 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ type: "tween", duration: 0.5 }}
									/>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Carousel;
