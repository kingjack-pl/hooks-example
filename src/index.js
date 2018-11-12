import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Counter from "./components/Counter";
import HooksCounter from "./components/hooksCounter";

ReactDOM.render(
	<Fragment>
		<Counter />
		<HooksCounter />
	</Fragment>,
	document.getElementById("root")
);
