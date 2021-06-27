

import React, { useState } from "react";
import './CreateModal.css';
import { useAppState } from "../../AppContext";
import { createTask as requestCreateTask } from "../../services/tasks";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { CreateModalProps } from './CreateModalProps';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const CreateModal = (props: CreateModalProps) => {

    const { handleClose, open } = props;

    const [task, setTask] = useState(() => (
        {
            name: '',
            priority: 1
        }
    ));

    const { requestTasks } = useAppState();

    const onTextfieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [event.target.id]: event.target.value })
    };

    const createTask = () => {
        requestCreateTask(task)
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
            <DialogTitle>NEW TASK</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please change the following fields to create a new task
                </DialogContentText>
                <div className='modal-container'>
                    <TextField variant='filled' label='Name' placeholder='Create pipeline for deploy' id="name" onChange={onTextfieldChange} />
                    <TextField variant='filled' label='Priority' value={task.priority} id="priority" type='number' onChange={onTextfieldChange} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={createTask} color="primary" autoFocus>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}
