import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Photography from "./Pages/Photography";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ScrollToTop from "./ScrollToTop";

const lightMode = {
	bg: "#fff",
	fontColor: "#000",
	transition: "0.5s",
};

const darkMode = {
	bg: "#121212",
	fontColor: "#fff",
	transition: "0.5s",
};

const Style = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bg};
		color: ${(props) => props.theme.fontColor};
		transition: ${(props) => props.theme.transition};
	}
`;

const App = () => {
	var themeState =
		localStorage.getItem("mode") === null
			? "light"
			: localStorage.getItem("mode");

	const [theme, setTheme] = useState(themeState);

	return (
		<ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
			<Style />
			<Router>
				<ScrollToTop />
				<div className="mt-6 m-auto p-4 max-w-screen-lg">
					<Navbar theme={theme} setTheme={setTheme} />
					<Routes>
						<Route path="/" element={<Home theme={theme} />} />
						<Route path="/about" element={<About />} />
						<Route path="/experience" element={<Experience theme={theme} />} />
						<Route path="/projects" element={<Projects theme={theme} />} />
						<Route path="/photography" element={<Photography />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
