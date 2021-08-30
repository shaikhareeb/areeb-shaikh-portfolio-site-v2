import ContentCard from "./ContentCard";
import test from "../Images/test.jpg";
import test2 from "../Images/test2.jpg";

const Content = ({ theme }) => {
	return (
		<div className="mt-32">
			<h1 className="font-mono text-3xl pb-2">Content </h1>
			<div className="grid grid-cols-2 gap-x-4 ">
				<ContentCard image={test} text="About Me" route="/about" />
				<ContentCard image={test2} text="Experience" route="/experience" />
				<ContentCard image={test2} text="Projects" route="/projects" />
				<ContentCard image={test} text="Photography" route="/photography" />
			</div>
		</div>
	);
};

export default Content;
