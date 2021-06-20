import React, {useState} from "react";
import './EditModal.css';
import axios from "axios";

interface EditModalProps {

    name: string
    id: number
    priority: number
    closeFunction: () => void;
}

export const EditModal = (props: EditModalProps) => {

    const {name, priority, id } = props;

    const [task, updateTask] = useState({
        'name': name ,
        'priority':priority
    });

    const onTextfieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const reqTaskVar = {...task};
        // @ts-ignore
        reqTaskVar[event.target.id] = event.target.value;
        updateTask(reqTaskVar);
        console.log(reqTaskVar)
    };
    const saveData = () => {

        axios.put(`http://localhost:3000/task/${id}`, task)
            .then(() => {
                props.closeFunction()
            }).catch(e => console.log('error', e));
    }

    return (
        <div className="modalContainer">
            <div className="modalContent">
                <h4>Edita Task</h4>
                <div className="form-group">
                    <label className="form-label mt-4">Description</label>
                    <textarea value={task.name} className="form-control" id="name" onChange={onTextfieldChange} ></textarea>
                    <textarea value={task.priority} className="form-control" id="priority" onChange={onTextfieldChange} ></textarea>
                </div>
                <button className="btn btn-light m-3" onClick={() => props.closeFunction()}>Cancel</button>
                <button className="btn btn-success" onClick={saveData} >Save</button>
            </div>
        </div>
    )
}
