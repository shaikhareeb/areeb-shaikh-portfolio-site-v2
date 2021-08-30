import test from "../Images/test.jpg";
import { MdClose } from "react-icons/md";

const Modal = ({ toggle, setToggle, theme }) => {
	return (
		<>
			{toggle ? (
				<div className="top-0 left-0 right-0 bottom-0 z-20 w-full h-full fixed bg-black bg-opacity-50 flex justify-center items-center">
					<div
						style={
							theme === "light"
								? { backgroundColor: "white" }
								: { backgroundColor: "#181818" }
						}
						className="fixed w-3/4 h-5/6 shadow-md relative z-10 overflow-auto"
						onClick={() => setToggle((prev) => !prev)}
					>
						<img className="w-full h-4/6" src={test} alt="" />
						<div
							className="top-2 right-2 absolute text-white cursor-pointer"
							onClick={() => setToggle((prev) => !prev)}
						>
							<MdClose size={25} />
						</div>
						<div className="mt-4 ml-4 font-mono text-3xl flex flex-col justify-center items-left">
							<p>Sorting Visualizer</p>
							<p className="font-inconsolata text-xl pt-2">
								Sorting visualizer made with React
							</p>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
