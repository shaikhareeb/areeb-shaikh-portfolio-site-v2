import React, { useState } from "react";
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
			<div className="relative h-screen flex items-center justify-center ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-1/2 left-2 text-5xl text-black z-10 select-none h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					whileHover={{ scale: 1.4 }}
					initial={{ x: "-1vw", scale: 0.9, opacity: 0 }}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{ type: "tween" }}
					onClick={() => {
						setCurrent(current === 0 ? len - 1 : current - 1);
					}}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-1/2 right-2 text-5xl text-black z-10 select-none h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					whileHover={{ scale: 1.4 }}
					initial={{ x: "1vw", scale: 0.9, opacity: 0 }}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{ type: "tween" }}
					onClick={() => {
						setCurrent(current === len - 1 ? 0 : current + 1);
					}}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
				{CarouselData.map((slide, index) => {
					return (
						<div key={index}>
							{index === current && (
								<img
									src={slide.image}
									alt="photograph"
									className="h-96 w-full rounded-lg"
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ type: "tween", duration: 1 }}
								/>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Carousel;
