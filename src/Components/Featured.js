import FeaturedCard from "./FeaturedCard";
import test from "../Images/test.jpg";
import test2 from "../Images/test2.jpg";

const Featured = () => {
	return (
		<div className="mt-32">
			<h1 className="font-mono text-3xl pb-2">Featured</h1>
			<FeaturedCard image={test} text="test" />
			<FeaturedCard image={test2} text="test 2" />
		</div>
	);
};

export default Featured;
