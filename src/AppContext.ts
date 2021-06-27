import { createContext, useContext } from 'react'
import { Task } from './components/Models/Tasks';

interface AppState {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    requestTasks: () => void
}

export const AppContext = createContext<AppState>({} as any);
export const useAppState = () => useContext(AppContext)
