import React, { useReducer } from "react";
import Modal from "./Modal";

const initialContent = "";
const modalReducer = (
	state: string | JSX.Element,
	action: { text: string | JSX.Element }
): string | JSX.Element => {
	if (action.text === "") {
		state = "";
	} else {
		state = action.text;
	}
	return state;
};

export const useModal = (): {
  setModal: (modalContent: string | JSX.Element) => void;
  ModalContainer: () => JSX.Element;
} => {
	const [modal, dispatchModal] = useReducer(modalReducer, initialContent);

	const setModal = (modalContent: string | JSX.Element): void => {
		dispatchModal({ text: modalContent });
	};

	const ModalContainer = (): React.ReactElement => {
		return <Modal modalContent={modal} setModal={setModal} />;
	};

	return { setModal, ModalContainer };
};
