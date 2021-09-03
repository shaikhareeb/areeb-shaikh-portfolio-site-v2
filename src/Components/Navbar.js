import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

const Navbar = ({ theme, setTheme }) => {
	localStorage.setItem("mode", theme);

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const icon =
		theme === "light" ? <RiMoonClearLine size={25} /> : <FiSun size={25} />;

	return (
		<nav className="flex justify-between font-mono text-xl">
			<Link to="/" className="mr-30px hover:underline">
				AS
			</Link>
			<div className="flex">
				<Link to="/about" className="mr-30px hover:underline">
					About
				</Link>
				<Link to="/Experience" className="mr-30px hover:underline">
					Experience
				</Link>
				<Link to="/projects" className="mr-30px hover:underline">
					Projects
				</Link>
				<Link to="/photography" className="mr-30px hover:underline">
					Photography
				</Link>
				<div className="cursor-pointer" onClick={toggleTheme}>
					{icon}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
