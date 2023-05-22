import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  modalContent: string | JSX.Element;
  setModal: (modalContent: string | JSX.Element) => void;
}

const Modal = ({ modalContent, setModal }: ModalProps): React.ReactElement => {
	const refDialog = useRef<HTMLDialogElement>(null);

	const onCloseHandle = (): void => {
		setModal("");
	};

	useEffect(() => {
		if (modalContent !== "") {
			refDialog.current?.showModal();
		}
	}, [modalContent]);

	return (
		<dialog className={css.container} ref={refDialog}>
			{modalContent}
			<div className={css.closeButton} onClick={onCloseHandle}>
				<XMarkIcon height={30} />
			</div>
		</dialog>
	);
};

export default Modal;