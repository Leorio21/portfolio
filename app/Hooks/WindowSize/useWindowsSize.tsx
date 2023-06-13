import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const isClient = typeof window === "object";
	
	const getSize = () => {
		return {
			width: isClient ? window.innerWidth : 0,
			height: isClient ? window.innerHeight : 0
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (isClient) {
			const handleResize = () => {
				setWindowSize(getSize());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return windowSize;
}