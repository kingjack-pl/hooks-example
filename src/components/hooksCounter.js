import React, { useState } from "react";

const HooksCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<button onClick={() => setCounter(counter + 1)}>
			Click me! - {counter}
		</button>
	);
};

export default HooksCounter;
