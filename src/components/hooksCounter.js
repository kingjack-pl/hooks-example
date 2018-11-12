import React, { useState, useEffect } from "react";

const HooksCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${counter} times`;
	});

	return (
		<button onClick={() => setCounter(counter + 1)}>
			Click me! - {counter}
		</button>
	);
};

export default HooksCounter;
