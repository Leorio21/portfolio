import { IFormValues } from "@/app/Intefaces/Interfaces";
import { useEffect, useState } from "react";

export const useFetch = <T,>(
	inUrl: string,
	param?: RequestInit
): {
  isLoading: boolean;
  response?: T | undefined;
  error: string | undefined;
  fetchFunction: (inData?: IFormValues) => Promise<void>;
} => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [response, setResponse] = useState<T | undefined>(undefined);

	const fetchFunction = async (inData?: IFormValues): Promise<void> => {
		setIsLoading(true);
		setError(undefined);
		if (inData && param) {
			param.body = JSON.stringify(inData);
		}
		try {
			const result = await (await fetch(inUrl, param)).json();
			setResponse(result);
			setIsLoading(false);
		} catch (error: any) {
			setError(error);
		}
	};

	useEffect(() => {
		if (!param) {
			fetchFunction();
		}
	}, []);

	return { isLoading, response, error, fetchFunction };
};
