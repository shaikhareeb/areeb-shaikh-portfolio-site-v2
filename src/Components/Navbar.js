import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
	localStorage.setItem("mode", theme);

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const icon =
		theme === "light" ? <RiMoonClearLine size={23} /> : <FiSun size={23} />;

	const [drawer, setDrawer] = useState(false);

	const toggleNav = () => {
		setDrawer(!drawer);
	};

	const navIcon =
		drawer === false ? (
			<motion.div transition={{ type: "tween", duration: 0.5 }}>
				<BiMenuAltRight size={30} />
			</motion.div>
		) : (
			<motion.div
				animate={{ rotate: 45 }}
				transition={{ type: "tween", duration: 0.5 }}
			>
				<AiOutlinePlus size={30} />
			</motion.div>
		);

	return (
		<nav className="font-mono text-xl">
			<div className="flex justify-between">
				<motion.div whileHover={{ scale: 1.2 }}>
					<Link to="/" className="font-bold hover:underline">
						<img
							className="h-6 mt-2"
							src="https://img.icons8.com/android/50/000000/user-male.png"
							alt="icon"
						/>
					</Link>
				</motion.div>
				<div className="flex items-center">
					<div className="hidden md:block">
						<Link to="/about" className="mr-4 hover:underline">
							About
						</Link>
						<Link to="/Experience" className="mr-4 hover:underline">
							Experience
						</Link>
						<Link to="/projects" className="mr-4 hover:underline">
							Projects
						</Link>
						<Link to="/photography" className="mr-4 hover:underline">
							Photography
						</Link>
					</div>
					<motion.div
						whileHover={{ scale: 1.2 }}
						className="cursor-pointer"
						onClick={toggleTheme}
					>
						{icon}
					</motion.div>
					<button className="ml-2 md:hidden" onClick={toggleNav}>
						{navIcon}
					</button>
				</div>
			</div>
			{drawer ? (
				<motion.div
					className="flex flex-col border-t-2 border-b-2 border-current mt-4 items-center md:hidden"
					initial={{ x: "-5vh", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.5 }}
				>
					<Link to="/about" className="mt-4 hover:underline">
						About
					</Link>
					<Link to="/Experience" className="mt-2 hover:underline">
						Experience
					</Link>
					<Link to="/projects" className="mt-2 hover:underline">
						Projects
					</Link>
					<Link to="/photography" className="mt-2 mb-4 hover:underline">
						Photography
					</Link>
				</motion.div>
			) : null}
		</nav>
	);
};

export default Navbar;
