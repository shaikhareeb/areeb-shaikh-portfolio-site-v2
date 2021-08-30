import { useHistory } from "react-router-dom";

const ContentCard = ({ image, text, route }) => {
	let history = useHistory();
	let routeLink = route;

	return (
		<div className="w-full my-2">
			<div
				style={{
					backgroundImage: `url(${image})`,
				}}
				className="relative w-full h-96"
				onClick={() => history.push(routeLink)}
			>
				<div className="flex justify-center items-center duration-300 absolute w-full h-full text-zero bg-opacity-0 bg-black text-opacity-0 hover:bg-opacity-50 hover:text-2xl">
					<p className="font-mono text-white">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
