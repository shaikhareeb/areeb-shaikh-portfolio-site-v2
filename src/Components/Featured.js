import FeaturedCard from "./FeaturedCard";

const Featured = () => {
	return (
		<div className="mt-32">
			<h1 className="font-mono text-3xl pb-2">Featured</h1>
			<FeaturedCard />
			<FeaturedCard />
		</div>
	);
};

export default Featured;
