import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                {children}
                <button className="mt-4 w-full text-red-500" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};
