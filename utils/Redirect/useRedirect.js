import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = ({ url }) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (url) {
			navigate(`${url}`);
		}
	}, []);
	return;
};

export default useRedirect;
