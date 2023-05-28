import { useEffect, useState } from "react";

export const useFetch = <T,>(
	file: string
): {
  isLoading: boolean;
  response?: T | undefined;
  error: string | undefined;
  fetchFunction: (inData?: string) => Promise<void>;
} => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [response, setResponse] = useState<T | undefined>(undefined);

	const fetchFunction = async (inData?: string): Promise<void> => {
		setIsLoading(true);
		setError(undefined);
		try {
			const result = await (await fetch(file)).json();
			setResponse(result);
			setIsLoading(false);
		} catch (error: any) {
			setError(error);
		}
	};

	useEffect(() => {
		void fetchFunction();
	}, []);

	return { isLoading, response, error, fetchFunction };
};
