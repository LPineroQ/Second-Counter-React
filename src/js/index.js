//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondCounter from "./component/SecondCounter.jsx";

//render your react application
let count = 0;
setInterval(() => {
	ReactDOM.render(
		<SecondCounter count={count} />,
		document.querySelector("#app")
	);
	count++;
}, 1000);
