import React from "react";
import Comments from "../Components/Comments";
import { render, screen } from "@testing-library/react";

test("Comments Component Test", async () => {
	const check = render(<Comments />);
	check.debug();
});
