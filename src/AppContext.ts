import { createContext, useContext } from 'react'
import { MyTask } from './components/Models/Tasks';

interface AppState {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
    tasks: MyTask[];
    setTasks: (tasks: MyTask[]) => void;
    requestTasks: () => void
}

export const AppContext = createContext<AppState>({} as any);
export const useAppState = () => useContext(AppContext)
