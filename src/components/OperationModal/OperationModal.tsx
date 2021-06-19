import React from "react";
import './OperationModal.css';

interface OperationModalProps {
    closeFunction: () => void;
}
    
export const OperationModal = (props: OperationModalProps) => {
    return (
        <div className="modalContainer">
            <div className="modalContent">
            <p>hola</p>

                <button>Save</button>
                <button onClick={() => props.closeFunction()}>Cancel</button>

            </div>

            

        </div>
        )
    }

