import React, { useState } from "react";
import './EditModal.css';
import { useAppState } from "../../AppContext";
import { updateTask } from "../../services/tasks";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { EditModalProps } from './EditModalProps';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const EditModal = (props: EditModalProps) => {

    const { name, priority, id, handleClose, open } = props;

    const [task, setTask] = useState(() => (
        {
            id: id,
            name: name,
            priority: priority
        }
    ));

    const { requestTasks } = useAppState();

    const onTextfieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [event.target.id]: event.target.value })
    };

    const saveData = () => {
        updateTask(task)
            .then(() => {
                handleClose()
                requestTasks()
            }).catch(e => console.log('error', e));
    }

    return (
        <Dialog
            open={open}
            onClose={props.handleClose}

        >
            <DialogTitle>Edit task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please change the following fields to update the task
                </DialogContentText>
                <div className='modal-container'>
                    <TextField variant='filled' value={task.name} id="name" onChange={onTextfieldChange} />
                    <TextField variant='filled' value={task.priority} id="priority" type='number' onChange={onTextfieldChange} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={saveData} color="primary" autoFocus>
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    );
}
