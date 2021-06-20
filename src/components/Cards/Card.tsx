import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {EditModal} from '../EditModal/EditModal'

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

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/task/${task.id}`)
            .then(() => {
            }).catch(e => console.log('error', e));
    }

    return (
        <div className="card card-body mt-2" key={index}>
            <h2 >{task.name}</h2>

            <div>
                <Button onClick={handleDelete} color="secondary">
                    delete
                </Button>
                { openModal && <EditModal closeFunction={handleCloseModal} 
                id={task.id} 
                name={task.name} 
                priority={task.priority}/> }
            
                <Button onClick={() => setOpenModal(true)} color="primary">
                    Edit
                </Button>
            </div>
        </div>
    )

}