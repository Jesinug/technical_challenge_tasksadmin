import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { EditModal } from '../EditModal/EditModal'
import { useAppState } from "../../AppContext";
import './Card.css'
import { Task } from "../Models/Tasks";
import { deleteTask } from "../../services/tasks";

interface CardProps {
    task: {
        priority: number;
        name: string
        id: number
    }
    tasks: Task[]
    index: number;
}


export const Card = (props: CardProps): JSX.Element => {
    const { task, index } = props
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const { requestTasks } = useAppState();

    const closeEditModal = () => {
        setOpenEditModal(false)
    }

    const handleDelete = () => {
        deleteTask(task.id)
            .then(() => {
                setOpenDeleteModal(false)
                requestTasks()
            }).catch(e => console.log('error', e));
    }
    
    const closeDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    const renderEditModal = () => {
        return (
            <EditModal
                open={openEditModal}
                handleClose={closeEditModal}
                id={task.id}
                name={task.name}
                priority={task.priority} />
        );
    }

    const renderDeleteModal = () => {
        return <DeleteModal open={openDeleteModal} handleClose={closeDeleteModal} handleDelete={handleDelete} />

    }
    return (
        <>
            <div className="card card-body mt-2 d-flex" key={index}>
                <h5 >{task.name}</h5>
                <div className="main-container">
                    <div className="action-buttons">
                        <div className="button-container">
                            <Button size="small" onClick={() => setOpenDeleteModal(true)} variant="contained" color="secondary">
                                DELETE
                            </Button>
                        </div>

                        <div className="button-container">
                            <Button size="small" onClick={() => setOpenEditModal(true)} variant="contained" color="primary">
                                Edit
                            </Button>
                        </div>
                    </div>
                    <div className="button-container">
                        <span className="badge bg-dark m-6 d-flex justify-content-center align-items-center">
                            {task.priority}
                        </span>
                    </div>
                </div>
            </div>
            {renderEditModal()}
            {renderDeleteModal()}
        </>
    )

}