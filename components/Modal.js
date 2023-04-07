import { useEffect, useState } from "react";


export default function Modal({ children }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handleClose);
        document.addEventListener('blur', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
            document.removeEventListener('blur', handleClose);
        };
    }, [setIsActive]);

    const handleClose = () => {
        setIsActive(false);
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                display: isActive ? 'flex' : 'none',
                transition: isActive ? '0.3s' : 'none',
            }}
        >
            <div onClick={() => handleClose()}>
                <div>{children}</div>
            </div>
        </div>
    )
}