import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
    const elementRef = useRef(
        null
    ) as unknown as React.MutableRefObject<HTMLDivElement>;
    if (!elementRef.current) {
        elementRef.current = document.createElement('div') as HTMLDivElement;
    }
    useEffect((): (() => void) => {
        const modalRoot = document.getElementById('modal') as HTMLDivElement;
        modalRoot.appendChild(elementRef.current) as HTMLDivElement;
        return () =>
            modalRoot.removeChild(elementRef.current) as HTMLDivElement;
    }, []);
    return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
