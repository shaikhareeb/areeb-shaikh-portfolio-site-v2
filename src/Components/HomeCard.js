import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const HomeCard = ({ image, route }) => {
	let history = useHistory();
	let routeLink = route;
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			style={{
				backgroundImage: `url(${image})`,
			}}
			className="bg-no-repeat bg-contain bg-center rounded-md relative w-full md:h-96 h-48 bg-gray-200 cursor-pointer"
			onClick={() => history.push(routeLink)}
		/>
	);
};

export default HomeCard;
