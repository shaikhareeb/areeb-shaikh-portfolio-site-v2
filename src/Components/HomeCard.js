import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ image, route }) => {
	let navigate = useNavigate();
	let routeLink = route;
	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			style={{
				backgroundImage: `url(${image})`,
			}}
			className="bg-no-repeat bg-contain bg-center rounded-md relative w-full md:h-96 h-48 bg-gray-200 cursor-pointer"
			onClick={() => navigate(routeLink)}
		/>
	);
};

export default HomeCard;
