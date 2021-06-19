import { JSXElement } from "@babel/types";
import React from "react";

interface CardProps {
    task: {
        done: boolean;
        name: string
    }
    index: number;
    toggleDoneTask: (index: number) => void;
    removeTask: (index: number) => void;
}

export const Card = (props: CardProps) : JSX.Element => {
    const {task, index, toggleDoneTask, removeTask} = props
    return (
        <div className="card card-body mt-2" key={index}>
            <h2 style={{textDecoration: task.done ? 'line-through' : ''}}>{task.name}</h2>
            <div>
            <button className="btn btn-outline-primary" onClick={() => toggleDoneTask(index)}>
              {task.done ? '✔' : '➔'}
            </button>
            <button 
            className="btn btn-outline-danger m-3" 
            onClick={() => removeTask(index)}
            >
            🗑️
            </button>
            </div>
          </div>
    )

}