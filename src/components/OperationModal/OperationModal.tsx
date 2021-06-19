import React from "react";
import './OperationModal.css';

interface OperationModalProps {
    closeFunction: () => void;
}
    
export const OperationModal = (props: OperationModalProps) => {
    return (
        <div className="modalContainer">
            <div className="modalContent">
            <h4>New Task</h4>
            <div className="form-group">
      <label className="form-label mt-4">Description</label>
      <textarea className="form-control" id="exampleTextarea"></textarea>
    </div>
                <button className="btn btn-light m-3" onClick={() => props.closeFunction()}>Cancel</button>
                <button className="btn btn-success">Save</button>
            </div>

            

        </div>
        )
    }

