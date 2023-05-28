import React, { useReducer } from "react";
import Notify from "./Notify";

interface NotifyProps {
  color?: "success" | "error" | "warning";
}

const initialContent = "";
const notifyReducer = (state: string, action: { text: string }): string => {
	state = action.text;
	return state;
};

export const useNotify = (): {
  setNotify: (notifyContent: string) => void;
  NotifyContainer: ({ color }: NotifyProps) => JSX.Element;
} => {
	const [notify, dispatchNotify] = useReducer(notifyReducer, initialContent);

	const setNotify = (notifyContent: string): void => {
		dispatchNotify({ text: notifyContent });
	};

	const NotifyContainer = ({
		color = "success",
	}: NotifyProps): React.ReactElement => {
		return <Notify inTheme={color} inSetNotify={setNotify} inContent={notify} />;
	};

	return { setNotify, NotifyContainer };
};
