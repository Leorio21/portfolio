import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  inModalContent: string | JSX.Element;
  inSetModal: (modalContent: string | JSX.Element) => void;
}

const Modal = ({ inModalContent, inSetModal }: ModalProps): React.ReactElement => {
	const refDialog = useRef<HTMLDialogElement>(null);

	const onCloseHandle = (): void => {
		inSetModal("");
	};

	useEffect(() => {
		if (inModalContent !== "") {
			refDialog.current?.showModal();
		}
	}, [inModalContent]);

	return (
		<dialog className={css.container} ref={refDialog}>
			{inModalContent}
			<div className={css.closeButton} onClick={onCloseHandle}>
				<XMarkIcon height={30} />
			</div>
		</dialog>
	);
};

export default Modal;