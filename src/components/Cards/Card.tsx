import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import {EditModal} from '../EditModal/EditModal'
import { useAppState } from "../../AppContext";
import './Card.css'

interface CardProps {
    task: {
        priority: number;
        name: string
        id: number
    }
    tasks: MyTask[]
    index: number;
}

interface MyTask {
    name: string;
    priority: number;
    id: number
}

export const Card = (props: CardProps): JSX.Element => {
    const {task, index, tasks, } = props
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const {requestTasks} = useAppState();

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/task/${task.id}`)
            .then(() => {
                setOpenDeleteModal(false)
                requestTasks()
            }).catch(e => console.log('error', e));
    }
    const closeDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    return (
        <>
        <div className="card card-body mt-2 d-flex" key={index}>
            <h4 >{task.name}</h4>


            <div className="main-container">
                <div className="action-buttons">
                <div className="button-container">
            <Button size="small" onClick={()=> setOpenDeleteModal(true)} variant="contained" color="secondary">
                DELETE
            </Button>
            </div>
 
                { openModal && <EditModal closeFunction={handleCloseModal} 
                id={task.id} 
                name={task.name} 
                priority={task.priority}/> 
                }
            <div className="button-container">
                <Button size="small" onClick={() => setOpenModal(true)} variant="contained" color="primary">
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
        <DeleteModal open = {openDeleteModal} handleClose = {closeDeleteModal} handleDelete = {handleDelete}/>
        </>
    )

}