import axios from "axios";
import React, { useState } from "react";
import { useAppState } from "../../AppContext";
import './OperationModal.css';

interface OperationModalProps {
    closeFunction: () => void;
}
    
export const OperationModal = (props: OperationModalProps) => {
    const [task, setTask] = useState({
        'name': '',
        'priority': ''
    })
    const {requestTasks} = useAppState();

    const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask({
            ...task, [event.target.id]:[event.target.value]
        })
        console.log(task)
    }

    const saveTask = () => {
        axios.post('http://localhost:3000/task', task)
        .then(() => {
            props.closeFunction()
            requestTasks()
        }).catch(e => console.log(e))
    }

    return (
        <div className="modalContainer min-height-120">
            <div className="modalContent">
            <h4 className="mb-1">New Task</h4>
            
                <label className="form-label mt-2">Name</label>
                <textarea className="form-control" id="name" onChange={onTextAreaChange}></textarea>

                <label className="form-label mt-1">Priority</label>
                <textarea className="form-control" id="priority" onChange={onTextAreaChange}></textarea>

                <button className="btn btn-light m-3" onClick={() => props.closeFunction()}>Cancel</button>
                <button className="btn btn-success" onClick={saveTask}>Save</button>
            
            </div>     
        </div>
        )
    }

