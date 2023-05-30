import React, { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import style from "./Notify.module.css";

interface NotifyProps {
  inTheme: string;
  inContent: string;
  inSetNotify: (notifyContent: string) => void;
}

const Notify = ({
	inTheme,
	inContent,
	inSetNotify,
}: NotifyProps): React.ReactElement => {

	const notifyRef = useRef<HTMLDivElement>(null)

	const onCloseHandle = (): void => {
		inSetNotify("");
	};

	useEffect(() => {
		if (notifyRef.current !== null) {
			if (inContent === "") {
				notifyRef.current.classList.remove(style.anim)
			} else {
				notifyRef.current.classList.add(style.anim)
			}
		}
	}, [inContent])

	return (
		<div className={`${style.container} ${style[inTheme]}`} ref={notifyRef}>
			{inContent}
			<div onClick={onCloseHandle} className={style.closeButton}>
				<XMarkIcon height={20} className={style.closeButtonIcon} />
			</div>
		</div>
	);
};

export default Notify;
